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
import { MiscService } from './misc.service.js';
import { CreateMiscDto } from './dto/create-misc.dto.js';
import { UpdateMiscDto } from './dto/update-misc.dto.js';
import type { Request } from 'express';

import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../../guard/jwt-guard.js';
import { Role } from './../../enums/roles.enum.js';
import { Roles } from './../../decorator/roles.decorator.js';

@UseGuards(JwtAuthGuard)
@Roles(Role.ADMIN)
@Controller('miscellaneous')
export class MiscController {
  constructor(private readonly miscService: MiscService) {}

  @Post('upload')
  create(@Body() createMiscDto: CreateMiscDto, @Req() req: Request) {
    return this.miscService.create(createMiscDto, req);
  }

  @Get('/record/:id')
  getSelectedMisc(@Req() req: Request, @Param('id') id: string) {
    return this.miscService.getSelectedMISC(req, id);
  }

  @Get('recent')
  getRecentMisc(@Req() req: Request) {
    return this.miscService.GetRecentMisc(req);
  }

  @Get()
  findAll() {
    return this.miscService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.miscService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMiscDto: UpdateMiscDto) {
    return this.miscService.update(+id, updateMiscDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.miscService.remove(+id);
  }
}
