import { Injectable, BadRequestException } from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateAuthDto } from './dto/create-auth.dto.js';
import { PrismaService } from './../prisma/prisma.service.js';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { MailService } from '../mail/mail.service.js';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface User {
      id: number;
      govUsername: string;
      email: string;
      role: string;
      firstName: string;
      lastName: string;
      assignedOperationId: number | null;
    }

    interface Request {
      user?: User;
    }
  }
}

function getCookieOptions() {
  const env = (process.env.NODE_ENV ?? '').toLowerCase();
  const secure = env === 'production' || env === 'staging';
  const sameSite: 'none' | 'lax' = secure ? 'none' : 'lax';
  return {
    httpOnly: true,
    secure,
    sameSite,
  };
}

const sessionTimeoutFormat = {
  15: 15 * 60 * 1000,
  30: 30 * 60 * 1000,
  1: 60 * 60 * 1000,
  2: 2 * 60 * 60 * 1000,
  3: 3 * 60 * 60 * 1000,
  4: 4 * 60 * 60 * 1000,
  never: 365 * 24 * 60 * 60 * 1000,
} as const;

type SessionTimeoutKey = keyof typeof sessionTimeoutFormat;

type LoginUserRecord = {
  id: number;
  email: string;
  govUsername: string;
  role: string;
  password: string;
  userInfo: {
    firstName: string;
    lastName: string;
    sessionTime: number;
    assignedOperationId: number | null;
    assignedLGUID: number | null;
    assignedBarangayId: number | null;
  } | null;
};

const buildAuthUser = (user: LoginUserRecord): Express.User => ({
  id: user.id,
  email: user.email,
  govUsername: user.govUsername,
  role: user.role,
  firstName: user.userInfo?.firstName ?? '',
  lastName: user.userInfo?.lastName ?? '',
  assignedOperationId: user.userInfo?.assignedOperationId ?? null,
});

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async login(createAuthDto: CreateAuthDto, res: Response) {
    try {
      const checkUser = (await this.prisma.client.user.findFirst({
        where: {
          OR: [
            { email: createAuthDto.email },
            { govUsername: createAuthDto.email },
          ],
        },
        select: {
          id: true,
          email: true,
          govUsername: true,
          role: true,
          password: true,
          userInfo: {
            select: {
              firstName: true,
              lastName: true,
              sessionTime: true,
              assignedOperationId: true,
              assignedLGUID: true,
              assignedBarangayId: true,
            },
          },
        },
      })) as LoginUserRecord | null;

      if (!checkUser) {
        return res.status(401).json({
          message: 'Account not found',
          step: 'CHECK_USER',
          upload: false,
        });
      }

      const validPassword = await argon2.verify(
        checkUser.password,
        createAuthDto.password,
      );

      if (!validPassword) {
        return res.status(401).json({
          message: 'Wrong password',
          step: 'VERIFY_PASSWORD',
          upload: false,
        });
      }

      const userDataInfo = checkUser.userInfo;

      if (!userDataInfo) {
        return res.status(404).json({
          message: 'User info missing',
          step: 'GET_USER_INFO',
          upload: false,
        });
      }

      const user = buildAuthUser(checkUser);
      const payload = {
        ...user,
        lgu: userDataInfo.assignedLGUID,
        barangay: userDataInfo.assignedBarangayId,
      };

      const sessionMs =
        userDataInfo.sessionTime >= 1000 ? userDataInfo.sessionTime : 7200000;

      const token = this.jwtService.sign(payload, {
        expiresIn: Math.floor(sessionMs / 1000),
      });

      const maxAge = sessionMs;

      res.cookie('accessToken', token, {
        ...getCookieOptions(),
        maxAge,
      });

      res.setHeader('Cache-Control', 'no-store');

      return res.json({
        message: 'Login successful',
        upload: true,
        sessionTime: userDataInfo.sessionTime,
        user,
      });
    } catch (error: unknown) {
      console.error('LOGIN_ERROR FULL:', error);
      const normalizedError =
        error instanceof Error ? error : new Error('Unknown error');

      return res.status(500).json({
        message: 'Login failed',
        step: 'UNKNOWN_ERROR',
        expiredIn: Math.floor(sessionTimeoutFormat[15] / 1000),
        error: normalizedError.message,
        stack: normalizedError.stack,
        upload: false,
      });
    }
  }

  async forgotPassword(email: string, res: Response) {
    const user = await this.prisma.client.user.findUnique({ where: { email } });

    if (!user) {
      return res
        .status(404)
        .json({ message: 'No account found with that email.' });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await this.prisma.client.passwordResetCode.upsert({
      where: { userId: user.id },
      update: { code, expiresAt },
      create: { userId: user.id, code, expiresAt },
    });

    await this.mailService.sendMail(
      email,
      'Your Password Reset Code',
      `<p>Your password reset code is: <strong>${code}</strong></p><p>This code expires in 10 minutes.</p>`,
    );

    return res.json({ message: 'Reset code sent to your email.' });
  }

  async resetPassword(
    email: string,
    code: string,
    newPassword: string,
    res: Response,
  ) {
    const record = await this.prisma.client.passwordResetCode.findFirst({
      where: { user: { email } },
    });

    if (!record) {
      return res
        .status(400)
        .json({ message: 'No reset code found for this email.' });
    }

    if (record.code !== code) {
      return res.status(400).json({ message: 'Invalid reset code.' });
    }

    if (new Date() > record.expiresAt) {
      return res
        .status(400)
        .json({ message: 'Reset code has expired. Please request a new one.' });
    }

    const hashed = await argon2.hash(newPassword);

    await this.prisma.client.user.update({
      where: { email },
      data: { password: hashed },
    });

    await this.prisma.client.passwordResetCode.delete({
      where: { id: record.id },
    });

    return res.json({ message: 'Password reset successfully.' });
  }

  checkAuth(req: Request) {
    if (!req.user) {
      throw new BadRequestException('User not authenticated');
    }
    return {
      id: req.user.id,
      email: req.user.email,
      role: req.user.role,
      govUsername: req.user.govUsername,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      assignedOperationId: req.user.assignedOperationId,
    };
  }

  findAll() {
    return this.prisma.client.user.findMany();
  }

  async newSessionTime(sessionTime: string, req: Request) {
    const user = req.user;
    if (!user) {
      throw new BadRequestException('User not authenticated');
    }
    if (!(sessionTime in sessionTimeoutFormat)) {
      throw new BadRequestException('Invalid session timeout option');
    }
    const sessionKey = sessionTime as SessionTimeoutKey;
    const newSessionTimeUpdate = await this.prisma.client.userInfo.update({
      where: { userId: user.id },
      data: { sessionTime: sessionTimeoutFormat[sessionKey] },
    });
    console.log(
      'Session time updated for user:',
      user.id,
      'New session time:',
      newSessionTimeUpdate.sessionTime,
    );
    return { message: 'Session time updated successfully', updated: true };
  }

  logout(res: Response) {
    res.clearCookie('accessToken', getCookieOptions());
    res.setHeader('Cache-Control', 'no-store');
    return res.json({ message: 'Logout successful', logout: true });
  }
}
