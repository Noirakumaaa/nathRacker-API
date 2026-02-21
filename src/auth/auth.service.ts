import { Injectable, BadRequestException } from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateAuthDto } from './dto/create-auth.dto.js';
import { PrismaService } from './../prisma/prisma.service.js';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

declare global {
  namespace Express {
    interface User {
      id: number;
      govUsername: string;
      email: string;
      role: string;
    }

    interface Request {
      user?: User;
    }
  }
}

const sessionTimeoutFormat = {
  15 : 15 * 60 * 1000,
  30 : 30 * 60 * 1000,
  1 : 60 * 60 * 1000,
  2 : 2 * 60 * 60 * 1000,
  3 : 3 * 60 * 60 * 1000,
  4 : 4 * 60 * 60 * 1000,
  never : 365 * 24 * 60 * 60 * 1000
} as const

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private jwtService: JwtService) {}

  async Register(createAuthDto: CreateAuthDto) {
    
    const checkDuplicate = await this.prisma.client.user.findUnique({
      where: { email: createAuthDto.email },
    });

    if (checkDuplicate) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await argon2.hash(createAuthDto.password);

    return this.prisma.client.user.create({
      data: {
        govUsername: createAuthDto.govUsername,
        email: createAuthDto.email,
        password: hashedPassword,
        role: createAuthDto.role,
        userInfo: {
          create: {
            firstName: createAuthDto.firstName,
            lastName: createAuthDto.lastName,
            phone: createAuthDto.phone,
          },
        },
      },
    });
  }

  async login(createAuthDto: CreateAuthDto, res: Response) {
    const checkUser = await this.prisma.client.user.findFirst({
      where: { 
        OR: [
          { email: createAuthDto.email },
          { govUsername: createAuthDto.email }
        ]
      },
    });

    const sessionTimeout = await this.prisma.client.userInfo.findFirst({
      where: { userId: checkUser?.id },
    });


    if (!checkUser) {
      throw new BadRequestException('Invalid email or password');
    }

    const validPassword = await argon2.verify(checkUser.password, createAuthDto.password);
    if (!validPassword) {
      throw new BadRequestException('Invalid email or password');
    }

    const payload = { email: checkUser.email, govUsername: checkUser.govUsername, role: checkUser.role, id: checkUser.id };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET_KEY || 'i12*^(@G2315dsi2193T',
      expiresIn: '1h',
    });

    res.cookie('accessToken', token, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: sessionTimeoutFormat[sessionTimeout?.sessionTime as keyof typeof sessionTimeoutFormat] || sessionTimeoutFormat[15],
    });

    return res.json({ message: 'Login successful', token });
  }

  checkAuth(req: Request) {
    if (!req.user) {
      throw new BadRequestException('User not authenticated');
    }

    return { email: req.user.email, role: req.user.role, id: req.user.id };
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
    console.log('Session time updated for user:', user.id, 'New session time:', newSessionTimeUpdate.sessionTime);
    return{ message: 'Session time updated successfully', updated: true}
  }


  logout(res: Response) {
    res.clearCookie('accessToken', {
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.json({ message: 'Logout successful' });
  }
}