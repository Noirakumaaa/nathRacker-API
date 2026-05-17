import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateAaRemarkDto } from './dto/create-aa-remark.dto.js';
import { UpdateAaRemarkDto } from './dto/update-aa-remark.dto.js';

@Injectable()
export class AaRemarksService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Add a remark to a document. Order is auto-incremented within the document.
   */
  async create(documentId: string, dto: CreateAaRemarkDto) {
    // Verify document exists
    const doc = await this.prisma.client.aaDocument.findUnique({
      where: { id: documentId },
    });
    if (!doc)
      throw new NotFoundException(`Document "${documentId}" not found.`);

    return this.prisma.client.$transaction(async (tx) => {
      const last = await tx.aaRemark.findFirst({
        where: { documentId },
        orderBy: { order: 'desc' },
        select: { order: true },
      });

      return tx.aaRemark.create({
        data: {
          documentId,
          content: dto.content,
          remarkDate: dto.remarkDate ? new Date(dto.remarkDate) : null,
          order: (last?.order ?? 0) + 1,
        },
      });
    });
  }

  async update(id: string, dto: UpdateAaRemarkDto) {
    const remark = await this.prisma.client.aaRemark.findUnique({
      where: { id },
    });
    if (!remark) throw new NotFoundException(`Remark "${id}" not found.`);

    return this.prisma.client.aaRemark.update({
      where: { id },
      data: {
        ...(dto.content !== undefined && { content: dto.content }),
        ...(dto.remarkDate !== undefined && {
          remarkDate: dto.remarkDate ? new Date(dto.remarkDate) : null,
        }),
      },
    });
  }

  async remove(id: string) {
    const remark = await this.prisma.client.aaRemark.findUnique({
      where: { id },
    });
    if (!remark) throw new NotFoundException(`Remark "${id}" not found.`);

    return this.prisma.client.aaRemark.delete({ where: { id } });
  }
}
