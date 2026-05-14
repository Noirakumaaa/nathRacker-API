import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePcnDto } from './dto/create-pcn.dto.js';
import { UpdatePcnDto } from './dto/update-pcn.dto.js';
import type { Request } from 'express';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class PcnService {
  constructor(private prisma: PrismaService) {}
  async create(createPcnDto: CreatePcnDto, req: Request) {
    const user = req.user;

    try {
      if (!user || !user.govUsername || !user.id) {
        throw new Error('User not authenticated');
      }

      if (!createPcnDto.pcn && !createPcnDto.lrn) {
        throw new HttpException(
          { upload: false, message: 'At least one of PCN or LRN is required.' },
          HttpStatus.BAD_REQUEST,
        );
      }

      // Build OR conditions safely
      const orConditions: { pcn?: string; lrn?: string }[] = [];
      if (createPcnDto.pcn) orConditions.push({ pcn: createPcnDto.pcn });
      if (createPcnDto.lrn) orConditions.push({ lrn: createPcnDto.lrn });

      // Check duplicates
      const checkDuplicate = await this.prisma.client.pcn.findFirst({
        where: { OR: orConditions },
      });

      if (checkDuplicate) {
        return {
          upload: false,
          message: 'Duplicate entry detected. Please try again.',
        };
      }

      // Create PCN record
      const result = await this.prisma.client.pcn.create({
        data: {
          ...createPcnDto,
          encodedBy: user.govUsername,
          userId: user.id,
          operationsOfficeNumId: user.assignedOperationId,
          date: new Date(),
        },
      });

      // Create global encoded record
      const globalRecordResult =
        await this.prisma.client.encodedDocument.create({
          data: {
            documentType: 'PCN',
            documentId: result.id,
            userId: user.id,
            date: new Date(),
            subjectOfChange: createPcnDto.subjectOfChange,
            idNumber: createPcnDto.hhId ?? '',
            name: createPcnDto.granteeName ?? '',
            drn: result.drn ?? ' ',
            remarks: createPcnDto.remarks ?? '',
            govUsername: user.govUsername,
            operationsOfficeNumId: user.assignedOperationId,
          },
        });

      return {
        upload: true,
        message: 'PCN created successfully',
        pcn: result,
        globalRecord: globalRecordResult,
      };
    } catch (error: any) {
      console.error('Error creating PCN:', error);

      // Return error details to the frontend
      return {
        upload: false,
        message: error?.message || 'An unexpected error occurred.',
        stack: error?.stack,
        details: error?.meta ?? null, // Prisma errors sometimes have `meta`
      };
    }
  }

  UserRecent(req: Request) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }
    return this.prisma.client.pcn.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  getPcnById(req: Request, id: number) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }
    return this.prisma.client.pcn.findFirst({
      where: {
        id: parseInt(id.toString()),
        userId: user.id,
      },
    });
  }

  findAll() {
    return `This action returns all pcn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pcn`;
  }
  async update(body: UpdatePcnDto) {
    try {
      const { id, ...data } = body;

      const numericId = Number(id);
      if (!numericId || isNaN(numericId)) {
        return { update: false, message: 'Invalid ID' };
      }

      const pcnUpdate = await this.prisma.client.pcn.update({
        where: { id: numericId },
        data: { ...data },
      });

      await this.prisma.client.encodedDocument.updateMany({
        where: {
          documentType: 'PCN',
          documentId: numericId,
        },
        data: {
          idNumber: pcnUpdate.hhId ?? '',
          name: pcnUpdate.granteeName ?? '',
          subjectOfChange: pcnUpdate.subjectOfChange ?? '',
          drn: pcnUpdate.drn ?? ' ',
          remarks: pcnUpdate.remarks ?? '',
        },
      });

      return { message: `Updated Item ${pcnUpdate.hhId}`, update: true };
    } catch (error) {
      console.error('PCN Update failed:', error);

      return {
        update: false,
        message: 'Failed to update PCN',
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }
  async remove(id: number) {
    const deletePcn = await this.prisma.client.pcn.delete({
      where: { id },
    });

    await this.prisma.client.encodedDocument.deleteMany({
      where: {
        documentId: id,
        documentType: 'PCN',
      },
    });

    return { message: `Deleted Item ${deletePcn.hhId}`, deleted: true };
  }
}
