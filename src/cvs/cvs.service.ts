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
      return {
        upload: false,
        message: 'Duplicate record found. CVS record not created.',
      };
    }

    const uploadCvs = await this.prisma.client.cVS.create({
      data: {
        ...createCvDto,
        date: new Date(),
        userId: user.id,
        operationsOfficeNumId: user.assignedOperationId,
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
        drn: uploadCvs.period ?? ' ',
        userId: user.id,
        govUsername: user.govUsername,
        operationsOfficeNumId: user.assignedOperationId,
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

  async update(dto: UpdateCvDto) {
    try {
      const { id, ...data } = dto;

      const numericId = Number(id);
      if (!numericId || isNaN(numericId)) {
        return { update: false, message: 'Invalid ID' };
      }

      const cvsUpdate = await this.prisma.client.cVS.update({
        where: { id: numericId },
        data: { ...data },
      });

      await this.prisma.client.encodedDocument.updateMany({
        where: {
          documentId: cvsUpdate.id,
          documentType: 'CVS',
        },
        data: {
          idNumber: String(cvsUpdate.idNumber ?? ''),
          name: cvsUpdate.facilityName ?? '',
          documentType: 'CVS',
          documentId: cvsUpdate.id,
          subjectOfChange: cvsUpdate.formType ?? '',
          drn: cvsUpdate.period ?? ' ',
          remarks: cvsUpdate.remarks ?? '',
        },
      });

      return {
        message: `Updated Item ${cvsUpdate.idNumber}`,
        update: true,
      };
    } catch (error) {
      console.error('CVS Update failed:', error);

      return {
        update: false,
        message: 'Failed to update CVS',
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  async remove(id: number) {
    const deleteCvs = await this.prisma.client.cVS.delete({
      where: { id },
    });

    await this.prisma.client.encodedDocument.deleteMany({
      where: { documentId: id, documentType: 'CVS' },
    });

    return { message: `Deleted Item ${deleteCvs.idNumber}`, deleted: true };
  }
}
