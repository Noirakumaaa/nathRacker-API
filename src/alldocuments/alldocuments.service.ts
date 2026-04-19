import { Injectable } from '@nestjs/common';
import { CreateAlldocumentDto } from './dto/create-alldocument.dto.js';
import { UpdateAlldocumentDto } from './dto/update-alldocument.dto.js';
import { PrismaService } from './../prisma/prisma.service.js';
import type { Request } from 'express';
import { NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
@Injectable()
export class AlldocumentsService {
  constructor(private prisma: PrismaService) { }

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

  async OperationTotalCount(req: Request) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }

    const countPerDocumentType =
      await this.prisma.client.encodedDocument.groupBy({
        by: ['remarks'],
        where: {
          userId: user.id,
        },
        _count: {
          remarks: true,
        },
      });

    // ✅ compute total
    const total = countPerDocumentType.reduce(
      (sum, item) => sum + item._count.remarks,
      0,
    );

    // ✅ fix here
    const result = countPerDocumentType.map((item) => ({
      remarks: item.remarks,
      count: item._count.remarks,
    }));

    return { result, total: total };
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

  globalRecords(req: Request) {
    const user = req.user;
    if (!user) throw new Error('User not authenticated');
    return this.prisma.client.encodedDocument.findMany({
      where: {
        operationsOfficeNumId: user.assignedOperationId
      },
      orderBy: { date: 'desc' },
    });
  }

  myRecords(req: Request) {
    const user = req.user;
    if (!user) throw new Error('User not authenticated');
    return this.prisma.client.encodedDocument.findMany({
      where: {
        userId: user.id
      },
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
    try {
      const deleteDocument = await this.prisma.client.encodedDocument.findUnique({
        where: { id },
      })

      if (!deleteDocument) {
        throw new NotFoundException(`Document #${id} not found`)
      }

      const { documentType, documentId } = deleteDocument

      try {
        switch (documentType) {
          case 'BUS':
            await this.prisma.client.bus.deleteMany({
              where: { id: documentId },
            })
            break

          case 'PCN':
            await this.prisma.client.pcn.deleteMany({
              where: { id: documentId },
            })
            break

          case 'SWDI':
            await this.prisma.client.swdi.deleteMany({
              where: { id: documentId },
            })
            break

          case 'CVS':
            await this.prisma.client.cVS.deleteMany({
              where: { id: documentId },
            })
            break

          case 'MISC':
            await this.prisma.client.miscellaneous.deleteMany({
              where: { id: documentId },
            })
            break
        }
      } catch (err) {
      }

      await this.prisma.client.encodedDocument.delete({
        where: { id },
      })

      return {
        deleted: true,
        message: `${documentType} #${documentId} processed and encodedDocument removed`,
      }
    } catch (error) {
      return {
        deleted: false,
        message: "Delete failed",
        error: error?.message || error,
      }
    }
  }
}
