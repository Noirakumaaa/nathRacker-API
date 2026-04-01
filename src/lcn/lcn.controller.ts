import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { PcnService } from './lcn.service.js';
import { CreatePcnDto } from './dto/create-pcn.dto.js';
import { UpdatePcnDto } from './dto/update-pcn.dto.js';
import type { Request } from 'express';

import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../../guard/jwt-guard.js';
import { Role } from './../../enums/roles.enum.js';
import { Roles } from './../../decorator/roles.decorator.js';

@UseGuards(JwtAuthGuard)
@Roles(Role.ADMIN) 
@Controller('lcn')
export class PcnController {
  constructor(private readonly pcnService: PcnService) {}

  @Post('upload')
  create(
    @Body() createPcnDto: CreatePcnDto,
    @Req() req: Request,
  ) {
    return this.pcnService.create(createPcnDto, req);
  }

  @Get('recent')
  UserRecent(@Req() req: Request) {
    return this.pcnService.UserRecent(req);
  }

  @Get('record/:id')
  getPcnById(@Req() req: Request, @Param('id') id: number) {
    return this.pcnService.getPcnById(req, id);
  }

  @Get()
  findAll() {
    return this.pcnService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcnService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePcnDto: UpdatePcnDto) {
    return this.pcnService.update(+id, updatePcnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcnService.remove(+id);
  }
}
