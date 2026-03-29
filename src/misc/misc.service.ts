import { Injectable } from '@nestjs/common';
import { CreateMiscDto } from './dto/create-misc.dto.js';
import { UpdateMiscDto } from './dto/update-misc.dto.js';
import type { Request } from 'express';
import { PrismaService } from '..//prisma/prisma.service.js';

@Injectable()
export class MiscService {
  constructor(private prisma: PrismaService) {}

  async create(createMiscDto: CreateMiscDto, req: Request) {
    const user = req.user;

    if (!user || !user.govUsername || !user.id) {
      throw new Error('User not authenticated');
    }

    const uploadCvs = await this.prisma.client.miscellaneous.create({
      data: {
        ...createMiscDto,
        subjectOfChange: createMiscDto.subjectOfChange || createMiscDto.granteeName,
        date: new Date(),
        userId: user.id,
      },
    });

    const globalUpload = await this.prisma.client.encodedDocument.create({
      data: {
        idNumber: String(uploadCvs.hhId),
        name: uploadCvs.granteeName,
        documentType: 'MISC',
        documentId: uploadCvs.id,
        subjectOfChange: uploadCvs.documentType,
        remarks: uploadCvs.remarks,
        userId: user.id,
        drn: uploadCvs.drn ?? " ",
        govUsername: user.govUsername,
        date: new Date(),
      },
    });
    console.log('INSERTED ', uploadCvs);
    return {
      upload: true,
      message: 'MISC Upload Complete',
      globalUpload: globalUpload,
    };
  }

  async getSelectedMISC(req: Request, id: string) {
    const user = req.user;
    if (!user) {
      return { message: 'NOT AUTHENTICATED' };
    }
    const data = await this.prisma.client.miscellaneous.findUnique({
      where: {
        id: Number(id),
      },
    });
    return data;
  }

  async GetRecentMisc(req: Request) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.prisma.client.miscellaneous.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        date: 'asc',
      },
      take: 5,
    });
  }

  findAll() {
    return `This action returns all misc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} misc`;
  }

  update(id: number, updateMiscDto: UpdateMiscDto) {
    return `This action updates a #${id} misc`;
  }

  remove(id: number) {
    return `This action removes a #${id} misc`;
  }
}
