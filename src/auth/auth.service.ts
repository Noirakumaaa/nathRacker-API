import { Injectable, BadRequestException } from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateAuthDto } from './dto/create-auth.dto.js';
import { PrismaService } from './../prisma/prisma.service.js';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { Upload } from 'lucide-react';

declare global {
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

const isProduction = process.env.NODE_ENV === 'PRODUCTION';
const isStaging = process.env.NODE_ENV === 'STAGING';

const cookieOptions = {
  httpOnly: true,
  secure: isProduction || isStaging,
  sameSite: (isProduction || isStaging ? 'none' : 'lax') as 'none' | 'lax',
};

const sessionTimeoutFormat = {
  15: 15 * 60 * 1000,
  30: 30 * 60 * 1000,
  1: 60 * 60 * 1000,
  2: 2 * 60 * 60 * 1000,
  3: 3 * 60 * 60 * 1000,
  4: 4 * 60 * 60 * 1000,
  never: 365 * 24 * 60 * 60 * 1000,
} as const;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
async login(createAuthDto: CreateAuthDto, res: Response) {
  try {
    const checkUser = await this.prisma.client.user.findFirst({
      where: {
        OR: [
          { email: createAuthDto.email },
          { govUsername: createAuthDto.email },
        ],
      },
    })

    if (!checkUser) {
      return res.status(401).json({
        message: 'Account not found',
        step: 'CHECK_USER',
        upload: false
      })
    }

    const validPassword = await argon2.verify(
      checkUser.password,
      createAuthDto.password,
    )

    if (!validPassword) {
      return res.status(401).json({
        message: 'Wrong password',
        step: 'VERIFY_PASSWORD',
        upload: false
      })
    }

    const userDataInfo = await this.prisma.client.userInfo.findFirst({
      where: {
        userId: checkUser.id
      }
    })

    if (!userDataInfo) {
      return res.status(404).json({
        message: 'User info missing',
        step: 'GET_USER_INFO',
        upload: false
      })
    }

    const payload = {
      email: checkUser.email,
      govUsername: checkUser.govUsername,
      firstName: userDataInfo.firstName,
      lastName: userDataInfo.lastName,
      assignedOperationId: userDataInfo.assignedOperationId,
      lgu: userDataInfo.assignedLGUID,
      barangay: userDataInfo.assignedBarangayId,
      role: checkUser.role,
      id: checkUser.id,
    }

    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET_KEY || 'i12*^(@G2315dsi2193T',
      expiresIn: userDataInfo.sessionTime
    })

    res.cookie('accessToken', token, {
      ...cookieOptions,
      maxAge: userDataInfo.sessionTime
    })

    return res.json({
      message: 'Login successful',
      upload: true,
      sessionTime : userDataInfo.sessionTime,
      token
    })

  } catch (error: any) {
    console.error('LOGIN_ERROR FULL:', error)

    return res.status(500).json({
      message: 'Login failed',
      step: 'UNKNOWN_ERROR',
      expiredIn : Math.floor(sessionTimeoutFormat[15] / 1000),
      error: error?.message,
      stack: error?.stack,
      upload: false
    })
  }
}
  checkAuth(req: Request) {
    if (!req.user) {
      throw new BadRequestException('User not authenticated');
    }
    return { email: req.user.email, role: req.user.role, id: req.user.id, govUsername: req.user.govUsername, firstName: req.user.firstName, lastName: req.user.lastName };
  }

  findAll() {
    return this.prisma.client.user.findMany();
  }

  async newSessionTime(sessionTime: string, req: Request) {
    const user = req.user;
    if (!user) {
      throw new BadRequestException('User not authenticated');
    }
    const newSessionTimeUpdate = await this.prisma.client.userInfo.update({
      where: { userId: user.id },
      data: { sessionTime: sessionTimeoutFormat[sessionTime] },
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
    res.clearCookie('accessToken', cookieOptions);
    return res.json({ message: 'Logout successful', logout : true });
  }
}
