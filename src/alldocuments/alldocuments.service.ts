import { Injectable } from '@nestjs/common';
import { CreateAlldocumentDto } from './dto/create-alldocument.dto.js';
import { UpdateAlldocumentDto } from './dto/update-alldocument.dto.js';
import { PrismaService } from './../prisma/prisma.service.js';
import type { Request } from 'express';
import { NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
@Injectable()
export class AlldocumentsService {
  constructor(private prisma: PrismaService) {}

  create(createAlldocumentDto: CreateAlldocumentDto) {
    return 'This action adds a new alldocument';
  }

  recent(req: Request) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }
    const userId = user.id;

    return this.prisma.client.encodedDocument.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        date: 'asc',
      },
    });
  }
  async alldocumentCountbyId(req: Request) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }
    const countPerDocumentType =
      await this.prisma.client.encodedDocument.groupBy({
        by: ['documentType'],
        where: {
          userId: user.id,
        },
        _count: {
          documentType: true,
        },
      });

    const result = countPerDocumentType.map((item) => ({
      documentType: item.documentType,
      count: item._count.documentType,
    }));
    return result;
  }

  async allDocumentWeeklyCount(req: Request) {
    const user = req.user;
    if (!user) throw new Error('User not authenticated');

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
    sevenDaysAgo.setHours(0, 0, 0, 0);

    const data = await this.prisma.client.encodedDocument.findMany({
      where: { userId: user.id, date: { gte: sevenDaysAgo } },
      select: { documentType: true, date: true },
    });

    const days = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      return d.toISOString().split('T')[0];
    });

    const result: Record<string, number[]> = {};

    data.forEach((doc) => {
      const day = doc.date.toISOString().split('T')[0];
      if (!result[doc.documentType])
        result[doc.documentType] = Array(7).fill(0);
      const index = days.indexOf(day);
      if (index >= 0) result[doc.documentType][index]++;
    });

    return result;
  }

  UserEncoded(req: Request) {
    const user = req.user;
    if (!user) throw new Error('User not authenticated');
    return this.prisma.client.encodedDocument.findMany({
      where: { userId: user.id },
      orderBy: { date: 'desc' },
    });
  }

  globalRecords() {
    return this.prisma.client.encodedDocument.findMany({
      orderBy: { date: 'desc' },
    });
  }

  findAll() {
    return `This action returns all alldocuments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alldocument`;
  }

  update(id: number, updateAlldocumentDto: UpdateAlldocumentDto) {
    return `This action updates a #${id} alldocument`;
  }

  async remove(id: number) {
    const deleteDocument = await this.prisma.client.encodedDocument.findUnique({
      where: { id },
    });

    if (!deleteDocument) {
      throw new NotFoundException(`Document #${id} not found`);
    }

    const { documentType, documentId } = deleteDocument;

    // Delete from the specific model based on documentType
    switch (documentType) {
      case 'BUS':
        await this.prisma.client.bus.delete({ where: { id: documentId } });
        break;
      case 'PCN':
        await this.prisma.client.pcn.delete({ where: { id: documentId } });
        break;
      case 'SWDI':
        await this.prisma.client.swdi.delete({ where: { id: documentId } });
        break;
      case 'CVS':
        await this.prisma.client.cVS.delete({ where: { id: documentId } });
        break;
      case 'MISC':
        await this.prisma.client.miscellaneous.delete({
          where: { id: documentId },
        });
        break;
      default:
        throw new BadRequestException(`Unknown documentType: ${documentType}`);
    }

    // Delete the global encoded document record
    await this.prisma.client.encodedDocument.delete({ where: { id } });

    return {
      deleted: true,
      message: `${documentType} #${documentId} deleted successfully`,
    };
  }
}
