import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { SwdiService } from './swdi.service.js';
import { CreateSwdiDto } from './dto/create-swdi.dto.js';
import { UpdateSwdiDto } from './dto/update-swdi.dto.js';
import { Roles } from './../../decorator/roles.decorator.js';
import { Role } from './../../enums/roles.enum.js';

@Roles(Role.ENCODER)
@Controller('swdi')
export class SwdiController {
  constructor(private readonly swdiService: SwdiService) {}

  @Post('upload')
  Post(@Body() createSwdiDto: CreateSwdiDto, @Req() req: Request) {
    return this.swdiService.create(createSwdiDto, req);
  }

  @Get('recent')
  recent(@Req() req: Request) {
    return this.swdiService.recent(req);
  }

  @Get('count')
  swdiCountbyId(@Req() req: Request) {
    return this.swdiService.swdiCountbyId(req);
  }

  @Get('record/:id')
  swdiRecordsById(@Req() req: Request, @Param('id') id: string) {
    return this.swdiService.swdiRecordsById(req, +id);
  }

  @Get()
  findAll() {
    return this.swdiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.swdiService.findOne(+id);
  }

  @Patch('/update')
  update(@Body() updateSwdiDto: UpdateSwdiDto) {
    return this.swdiService.update(updateSwdiDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.swdiService.remove(+id);
  }
}
