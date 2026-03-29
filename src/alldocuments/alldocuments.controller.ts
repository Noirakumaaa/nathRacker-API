import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { AlldocumentsService } from './alldocuments.service.js';
import { CreateAlldocumentDto } from './dto/create-alldocument.dto.js';
import { UpdateAlldocumentDto } from './dto/update-alldocument.dto.js';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../../guard/jwt-guard.js';
import { Role } from './../../enums/roles.enum.js';
import { Roles } from './../../decorator/roles.decorator.js';
import type { Request } from 'express';

@UseGuards(JwtAuthGuard)
@Roles(Role.ENCODER, Role.ADMIN) 
@Controller('alldocuments')
export class AlldocumentsController {
  constructor(private readonly alldocumentsService: AlldocumentsService) {}

  @Post()
  create(@Body() createAlldocumentDto: CreateAlldocumentDto) {
    return this.alldocumentsService.create(createAlldocumentDto);
  }

  @Get('UserRecent')
  recent(@Req() req: Request) {
    return this.alldocumentsService.recent(req);
  }

  @Get('count/documents')
  alldocumentCountbyId(@Req() req: Request) {
    return this.alldocumentsService.alldocumentCountbyId(req);
  }

  @Get('weekly-count')
  allDocumentWeeklyCount(@Req() req: Request) {
    return this.alldocumentsService.allDocumentWeeklyCount(req);
  }

  @Get("user/encoded")
  UserEncoded(@Req() req: Request) {
    return this.alldocumentsService.UserEncoded(req);
  }


  @Get('globalRecords')
  @Get()
  findAll() {
    return this.alldocumentsService.globalRecords();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alldocumentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlldocumentDto: UpdateAlldocumentDto) {
    return this.alldocumentsService.update(+id, updateAlldocumentDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.alldocumentsService.remove(+id);
  }
}
