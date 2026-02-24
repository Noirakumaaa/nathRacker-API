import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto.js';
import { UpdateCvDto } from './dto/update-cv.dto.js';
import type { Request } from 'express';
import { PrismaService } from './../prisma/prisma.service.js';
@Injectable()
export class CvsService {

  constructor(private prisma: PrismaService) {}
  

  async create(createCvDto: CreateCvDto, req : Request) {
    const user = req.user

    if (!user || !user.govUsername || !user.id) {
      throw new Error('User not authenticated');
    }

    const uploadCvs = await this.prisma.client.cVS.create({
      data : { 
        ...createCvDto,
        date : new Date(),
        userId : user.id
      }
    })

    const globalUpload = await this.prisma.client.encodedDocument.create({
      data: {
        idNumber: String(uploadCvs.idNumber),
        name: uploadCvs.facilityName,
        documentType: "CVS",
        documentId: uploadCvs.id,
        subjectOfChange: uploadCvs.formType,
        remarks: uploadCvs.remarks,
        userId: user.id,
        govUsername: user.govUsername,
        date: new Date()
      }
    })

    return { upload : true , message : "CVS Upload Complete", globalUpload : globalUpload}
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
