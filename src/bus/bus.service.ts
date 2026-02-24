import { Injectable } from '@nestjs/common';
import { CreateBusDto } from './dto/create-bus.dto.js';
import { UpdateBusDto } from './dto/update-bus.dto.js';
import { PrismaService } from './../prisma/prisma.service.js';
import type { Request } from 'express';


@Injectable()
export class BusService {
  constructor(private prisma: PrismaService) {}

  async create(createBusDto: CreateBusDto, req: Request) {
    const user = req.user;

    if (!user) {
      throw new Error('User not authenticated');
    }

    // Check for duplicates
    const checkDuplicate = await this.prisma.client.bus.findFirst({
      where: {
        updateInfo: createBusDto.updateInfo,
        hhId: createBusDto.hhId,
        remarks: createBusDto.remarks,
        subjectOfChange: createBusDto.subjectOfChange,
        NOT: [
          { updateInfo: undefined },
          { hhId: undefined },
          { remarks: '' },
          { subjectOfChange: undefined },
        ],
      },
    });

    console.log('Duplicate Check Result: ', checkDuplicate);

    if (checkDuplicate) {
      return {
        upload: false,
        message: 'Duplicate record found. Bus record not created.',
      };
    }
    console.log('Gov Username : ', user.govUsername);
    // Create new bus record
    const result = await this.prisma.client.bus.create({
      data: {
        ...createBusDto,
        encodedBy: user.govUsername,
        userId: user.id,
        date: new Date(),
      },
    });

    const globalTable = await this.prisma.client.encodedDocument.create({ 
      data: {
        idNumber: result.hhId,
        name: result.granteeName,
        documentType: 'BUS',
        documentId: result.id,
        subjectOfChange: result.subjectOfChange,
        userId: user.id,
        date: new Date(),
        remarks: result.remarks,
        govUsername: user.govUsername
      }
    })

    return {
      message: 'Bus record created successfully',
      data: result,
      upload: true,
    };
  }

  findAll() {
    return `This action returns all bus`;
  }

  recent(req: Request) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }
  
    return this.prisma.client.bus.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        date: 'asc',
      },
      take: 5,
    });
  }

  busRecord() {

    return this.prisma.client.encodedDocument.findMany({
      where: {
        documentType: 'BUS',
      },
      orderBy: {
        date: 'asc',
      },
    });
  }

  busRecordsById(id: number) {
    const result = this.prisma.client.bus.findUnique({
      where: {
        id: id,
      },
    });

    return result
  }

  async busCountbyId(req: Request) {
    const user = req.user;
    if (!user) {
      throw new Error('User not authenticated');
    }

    const count = await this.prisma.client.bus.count({
      where: {
        userId: user.id,
      },
    });
    return {count : count};
  }

  update(id: number, updateBusDto: UpdateBusDto) {
    return `This action updates a #${id} bus`;
  }

  remove(id: number) {
    return `This action removes a #${id} bus`;
  }
}
