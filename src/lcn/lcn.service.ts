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



    if (!user || !user.govUsername || !user.id) {
      throw new Error('User not authenticated');
    }

    if (!createPcnDto.pcn && !createPcnDto.lrn) {
      throw new HttpException({ upload: false, message: 'At least one of PCN or LRN is required.' }, HttpStatus.BAD_REQUEST);
    }

    const checkDuplicate = await this.prisma.client.pcn.findFirst({
      where : {
         pcn : createPcnDto.pcn,
         lrn : createPcnDto.lrn
      }
    })

    if(checkDuplicate !== null){
      return { upload : false , message : "Duplicate entry Detected Please Try Again..."}
    }

    const result = await this.prisma.client.pcn.create({
      data: {
        ...createPcnDto,
        encodedBy: user.govUsername,
        userId: user.id,
        operationsOfficeNumId : user.assignedOperationId,
        date : new Date()
      },
    });

    const globalRecordResult = await this.prisma.client.encodedDocument.create({
      data: {
        documentType: 'PCN',
        documentId: result.id,
        userId: user.id,
        date: new Date(),
        subjectOfChange: createPcnDto.subjectOfChange,
        idNumber: createPcnDto.hhId ?? '',
        name: createPcnDto.granteeName ?? '',
        drn: result.drn ?? " ",
        remarks: createPcnDto.remarks ?? '',
        govUsername: user.govUsername,
        operationsOfficeNumId : user.assignedOperationId,
      },
    });

    return {upload : true, message : 'PCN created successfully', pcn: result, globalRecord: globalRecordResult};
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

  getPcnById(req: Request,id: number) {
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

  update(id: number, updatePcnDto: UpdatePcnDto) {
    return `This action updates a #${id} pcn`;
  }

  async remove(id: number) {
   const lcnDelete = await this.prisma.client.pcn.delete({
    where : { 
      id : id 
    }
   })
   await this.prisma.client.encodedDocument.delete({
    where : {
      documentId : lcnDelete.id
    }
   })
  }
}
