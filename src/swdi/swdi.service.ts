import { Injectable } from '@nestjs/common';
import type { Request } from 'express';
import { CreateSwdiDto } from './dto/create-swdi.dto.js';
import { UpdateSwdiDto } from './dto/update-swdi.dto.js';
import { PrismaService } from './../prisma/prisma.service.js';

@Injectable()
export class SwdiService {
  constructor(private prisma: PrismaService) {}

  async create(createSwdiDto: CreateSwdiDto, req: Request) {
    const user = req.user;
    if (!user) throw new Error('User not authenticated');

    const checkDuplicate = await this.prisma.client.swdi.findFirst({
      where: {
        hhId: createSwdiDto.hhId,
        lgu: createSwdiDto.lgu,
        barangay: createSwdiDto.barangay,
        grantee: createSwdiDto.grantee,
        swdiScore: createSwdiDto.swdiScore,
        swdiLevel: createSwdiDto.swdiLevel,
      }
    });

    if (checkDuplicate !== null) {
     return {
        upload: false,
        message: 'Duplicate record found. SWDI record not created.',
      };
    }

    const uploadSwdi = await this.prisma.client.swdi.create({
      data: {
        ...createSwdiDto,
        userId: user.id,
        encodedBy: user.govUsername,
        date: new Date(),
      },
    });

    const encodedDocument = await this.prisma.client.encodedDocument.create({
      data: {
        idNumber: uploadSwdi.hhId,
        name: uploadSwdi.grantee,
        documentType: 'SWDI',
        documentId: uploadSwdi.id,
        userId: user.id,
        date: new Date(),
        remarks: uploadSwdi.remarks,
        subjectOfChange: "",
        govUsername: user.govUsername
      },
    });

    return { upload: true, data: uploadSwdi, message : 'SWDI record created successfully', encodedDocument : encodedDocument };
  }

  recent(req: Request) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }
    
    return this.prisma.client.swdi.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
    });
  }

  async swdiCountbyId(req: Request) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }
    const count = await this.prisma.client.swdi.count({
      where: {
        userId: user.id,
      },
    });
    return { count };
  }

  swdiRecordsById(req: Request, id: number) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.prisma.client.swdi.findUnique({
      where: {
        id: id,
        userId: user.id,
      },
    });
  }

  findAll() {
    return `This action returns all swdi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} swdi`;
  }

  update(id: number, updateSwdiDto: UpdateSwdiDto) {
    return `This action updates a #${id} swdi`;
  }

  remove(id: number) {
    return `This action removes a #${id} swdi`;
  }
}
