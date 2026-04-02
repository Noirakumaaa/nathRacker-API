import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto.js';
import { UpdateCvDto } from './dto/update-cv.dto.js';
import type { Request } from 'express';
import { PrismaService } from './../prisma/prisma.service.js';
import { error } from 'console';
@Injectable()
export class CvsService {
  constructor(private prisma: PrismaService) {}

  async create(createCvDto: CreateCvDto, req: Request) {
    const user = req.user;

    if (!user || !user.govUsername || !user.id) {
      throw new Error('User not authenticated');
    }

    const duplicate = await this.prisma.client.cVS.findFirst({
      where: {
        idNumber: createCvDto.idNumber,
        formType: createCvDto.formType,
        period: createCvDto.period,
        facilityName: createCvDto.facilityName,
      },
    });

    if (duplicate) {
      return { upload: false, message: 'Duplicate record found. CVS record not created.' };
    }

    const uploadCvs = await this.prisma.client.cVS.create({
      data: {
        ...createCvDto,
        date: new Date(),
        userId: user.id,
      },
    });

    const globalUpload = await this.prisma.client.encodedDocument.create({
      data: {
        idNumber: String(uploadCvs.idNumber),
        name: uploadCvs.facilityName,
        documentType: 'CVS',
        documentId: uploadCvs.id,
        subjectOfChange: uploadCvs.formType,
        remarks: uploadCvs.remarks,
        drn : uploadCvs.period ?? " ",
        userId: user.id,
        govUsername: user.govUsername,
        date: new Date(),
      },
    });
    console.log('INSERTED ', uploadCvs);
    return {
      upload: true,
      message: 'CVS Upload Complete',
      globalUpload: globalUpload,
    };
  }



  
  async getSelectedCVS(req: Request, id: string) {
    const user = req.user;
    if (!user) {
      return { message: 'NOT AUTHENTICATED' };
    }
    const data = await this.prisma.client.cVS.findUnique({
      where: {
        id: Number(id),
      },
    });

    return data;
  }

  RecentCVS(req: Request) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.prisma.client.cVS.findMany({
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
    return `This action returns all cvs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cv`;
  }

  update(id: number, updateCvDto: UpdateCvDto) {
    return `This action updates a #${id} cv`;
  }

  remove(id: number) {
    return `This action removes a #${id} cv`;
  }
}
