import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import type { Request } from 'express';
import { BusService } from './bus.service.js';
import { CreateBusDto } from './dto/create-bus.dto.js';
import { UpdateBusDto } from './dto/update-bus.dto.js';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../../guard/jwt-guard.js';
import { Role } from './../../enums/roles.enum.js';
import { Roles } from './../../decorator/roles.decorator.js';

@UseGuards(JwtAuthGuard)
@Roles(Role.ENCODER, Role.ADMIN) 
@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @Post('upload')
  create(
    @Body() createBusDto: CreateBusDto,
    @Req() req: Request
  ) {
    return this.busService.create(createBusDto, req);
  }

  @Get()
  findAll() {
    return this.busService.findAll();
  }

  
  @Get('recent')
  recent(@Req() req: Request) {
    return this.busService.recent(req);
  }

  @Get('records')
  busRecord() {
    return this.busService.busRecord();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusDto: UpdateBusDto) {
    return this.busService.update(+id, updateBusDto);
  }

  @Get('records/:id',)
  busRecordsById(@Param('id') id: string) {
    return this.busService.busRecordsById(+id);
  }

  @Get('count')
  busCountbyId(@Req() req: Request) {
    return this.busService.busCountbyId(req);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.busService.remove(+id);
  }
}
