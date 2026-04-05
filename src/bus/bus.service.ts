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
    // Create new bus record
    const result = await this.prisma.client.bus.create({
      data: {
        ...createBusDto,
        encodedBy: user.govUsername,
        userId: user.id,
        operationsOfficeNumId : user.assignedOperationId,
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
        drn : result.drn ?? " ",
        date: new Date(),
        remarks: result.remarks,
        govUsername: user.govUsername,
        operationsOfficeNumId : user.assignedOperationId
      }
    })

    return {
      message: 'Bus record created successfully',
      data: result,
      upload: true,
    };
  }

  async findAll(req) {
    const user = req.user

    if (!user) {
      throw new Error('User not authenticated');
    }

    return await this.prisma.client.bus.findMany()

  
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
        date: 'desc',
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

  async verify(id: number, dto: { verified: string; verificationIssue?: string }, req: Request) {
    const user = req.user;
    if (!user) throw new Error('User not authenticated');

    return this.prisma.client.bus.update({
      where: { id },
      data: {
        verified: dto.verified,
        verificationIssue: dto.verificationIssue ?? null,
        verifiedBy: user.govUsername,
      },
    });
  }

  async update(updateBusDto: UpdateBusDto) {
    const { id, ...data }= updateBusDto
    const busUpdate = await this.prisma.client.bus.update({
      where : {
        id : updateBusDto.id
      },
      data : {
        ...data
      }
    })

    await this.prisma.client.encodedDocument.updateMany({
      where : {
        documentId : busUpdate.id,
        documentType : "BUS"
      },
      data: {
        idNumber: busUpdate.hhId,
        name: busUpdate.granteeName,
        documentType: 'BUS',
        documentId: busUpdate.id,
        subjectOfChange: busUpdate.subjectOfChange,
        drn : busUpdate.drn ?? " ",
        remarks: busUpdate.remarks,
      }
    })

    return { message : `Updated Item ${busUpdate.hhId}`, update : true}
  }

  async remove(id: number) {
    const deleteBus = await this.prisma.client.bus.delete({
      where : { 
        id : id 
      }
    })

    await this.prisma.client.encodedDocument.deleteMany({
      where : {
        documentId : id,
        documentType: "BUS"
      }
    })

    return {message : `Deleted Item ${deleteBus.hhId}`, deleted : true}
  }



  async getLGU(req : Request ){
    const user = req?.user
        if (!user) {
      throw new Error('User not authenticated');
    }

    return await this.prisma.client.lgu.findMany({
      where : {
        operationsOfficeNumId : Number(user.assignedOperationId)
      },
      include : {
        barangay : true
      }
    })
  }


}
