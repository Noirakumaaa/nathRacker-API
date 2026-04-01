import { Injectable } from '@nestjs/common';
import {
  CreateAdminDto,
  CreateLgu,
  CreateBarangay,
  CreateOperations,
} from './dto/create-admin.dto.js';
import type { Request } from 'express';
import { PrismaService } from '../prisma/prisma.service.js';
import { BadRequestException } from '@nestjs/common';
import { CreateRegisterAccount } from './dto/create-register.dto.js';
import { UpdateEmployeeDto } from './dto/update-employee.dto.js';
import * as argon2 from 'argon2';
@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  async createLgu(lgu: CreateLgu, req: Request) {
    const user = req.user;

    if (!user) {
      return { message: 'Auth Failed' };
    }

    const existing = await this.prisma.client.lgu.findFirst({
      where: {
        name: lgu.name,
        operationsOfficeNumId: lgu.operationsOfficeNumId,
      },
    });
    if (existing) {
      return { message: 'Duplicate upload', upload: false };
    }

    const res = await this.prisma.client.lgu.create({ data: lgu });
    return res;
  }

  async createBarangay(barangay: CreateBarangay, req: Request) {
    const user = req.user;

    if (!user) {
      return { message: 'Auth Failed' };
    }

    const existing = await this.prisma.client.barangay.findFirst({
      where: { name: barangay.name, lguId: barangay.lguId },
    });
    if (existing) {
      return { message: 'Duplicate upload', upload: false };
    }

    const res = await this.prisma.client.barangay.create({ data: barangay });
    return res;
  }

  async createOperationsOffice(operations: CreateOperations, req: Request) {
    const user = req.user;

    if (!user) {
      return { message: 'Auth Failed' };
    }

    const existing = await this.prisma.client.operationsOfficeNum.findFirst({
      where: { name: operations.name },
    });
    if (existing) {
      return { message: 'Duplicate upload', upload: false };
    }

    const res = await this.prisma.client.operationsOfficeNum.create({
      data: operations,
    });
    return res;
  }

  async Register(createAuthDto: CreateRegisterAccount) {
    const checkDuplicate = await this.prisma.client.user.findFirst({
      where: {
        OR: [
          { email: createAuthDto.email },
          { govUsername: createAuthDto.govUsername },
        ],
      },
    });

    if (checkDuplicate) {
      if (checkDuplicate.email === createAuthDto.email) {
        throw new BadRequestException('Email already exists');
      }
      throw new BadRequestException('Username already exists');
    }

    const hashedPassword = await argon2.hash(createAuthDto.password);

    const user = await this.prisma.client.user.create({
      data: {
        govUsername: createAuthDto.govUsername,
        email: createAuthDto.email,
        password: hashedPassword,
        role: createAuthDto.role,
        userInfo: {
          create: {
            firstName: createAuthDto.firstName,
            middleName: createAuthDto.middleName,
            lastName: createAuthDto.lastName,
            phone: createAuthDto.phone,
            assignedOperationId: createAuthDto.assignedOperationId,
            assignedLGUID: createAuthDto.assignedLGUID,
            assignedBarangayId: createAuthDto.assignedBarangayId,
          },
        },
      },
    });
    return { Register: true, newUser: user.govUsername };
  }

  async getEmployees() {
    return this.prisma.client.user.findMany({
      select: {
        id: true,
        govUsername: true,
        email: true,
        role: true,
        createdAt: true,
        userInfo: {
          select: {
            firstName: true,
            lastName: true,
            middleName: true,
            phone: true,
            assignedOperationId: true,
            assignedLGUID: true,
            assignedBarangayId: true,
          },
        },
      },
    });
  }

  async updateEmployee(id: number, dto: UpdateEmployeeDto) {
    const user = await this.prisma.client.user.findUnique({ where: { id } });
    if (!user) throw new BadRequestException('User not found');

    await this.prisma.client.user.update({
      where: { id },
      data: { role: dto.role },
    });

    await this.prisma.client.userInfo.update({
      where: { userId: id },
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        middleName: dto.middleName,
        phone: dto.phone,
        assignedOperationId: dto.assignedOperationId,
        assignedLGUID: dto.assignedLGUID,
        assignedBarangayId: dto.assignedBarangayId,
      },
    });

    return { updated: true };
  }

  async getAssignedArea(){
    const lgu = await this.prisma.client.lgu.findMany()
    const barangay = await this.prisma.client.barangay.findMany()
    const operations = await this.prisma.client.operationsOfficeNum.findMany()
  
    return { 
      lgu : lgu,
      barangay : barangay,
      operations : operations
    }

  }


}
