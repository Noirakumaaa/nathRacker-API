import { Injectable, BadRequestException } from '@nestjs/common';
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

    // Validate DRN against AA tracking if provided
    if (createSwdiDto.drn && createSwdiDto.drn.trim()) {
      const aaDoc = await this.prisma.client.aaDocument.findFirst({
        where: { trackingNo: createSwdiDto.drn.toUpperCase() },
        select: { id: true },
      });
      if (!aaDoc) {
        throw new BadRequestException(
          `DRN "${createSwdiDto.drn}" was not found in the AA tracking system. Please check the number and try again.`,
        );
      }
    }

    const checkDuplicate = await this.prisma.client.swdi.findFirst({
      where: {
        hhId: createSwdiDto.hhId,
        lgu: createSwdiDto.lgu,
        barangay: createSwdiDto.barangay,
        grantee: createSwdiDto.grantee,
        swdiScore: createSwdiDto.swdiScore,
        swdiLevel: createSwdiDto.swdiLevel,
      },
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
        operationsOfficeNumId: user.assignedOperationId,
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
        date: uploadSwdi.date,
        drn: uploadSwdi.drn ?? ' ',
        remarks: uploadSwdi.remarks,
        subjectOfChange: '',
        operationsOfficeNumId: user.assignedOperationId,
        govUsername: user.govUsername,
      },
    });

    return {
      upload: true,
      data: uploadSwdi,
      message: 'SWDI record created successfully',
      encodedDocument: encodedDocument,
    };
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

  async update(body: UpdateSwdiDto) {
    const { id, ...data } = body;
    try {
      const swdiUpdate = await this.prisma.client.swdi.update({
        where: { id: id },
        data: { ...data },
      });

      await this.prisma.client.encodedDocument.updateMany({
        where: {
          documentId: swdiUpdate.id,
          documentType: 'SWDI',
        },
        data: {
          idNumber: swdiUpdate.hhId,
          name: swdiUpdate.grantee,
          documentType: 'SWDI',
          documentId: swdiUpdate.id,
          subjectOfChange: '',
          drn: swdiUpdate.drn ?? ' ',
          remarks: swdiUpdate.remarks,
        },
      });

      return { message: `Updated Item ${swdiUpdate.hhId}`, update: true };
    } catch (error) {
      console.error('Update failed:', error);
      return {
        message: 'Failed to update item',
        update: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }
  async remove(id: number) {
    try {
      const deleteSwdi = await this.prisma.client.swdi.delete({
        where: { id },
      });

      const checkBefore = await this.prisma.client.encodedDocument.findMany({
        where: {
          documentId: id,
          documentType: 'SWDI',
        },
      });

      const globalswdi = await this.prisma.client.encodedDocument.deleteMany({
        where: {
          documentId: id,
          documentType: 'SWDI',
        },
      });

      return {
        message: 'Deleted',
        swdi: deleteSwdi,
        beforeDeleteMatch: checkBefore.length,
        deletedCount: globalswdi.count,
      };
    } catch (error) {
      return {
        message: 'Delete failed',
        error: error?.message || error,
      };
    }
  }
}
