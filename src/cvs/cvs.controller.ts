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
import { CvsService } from './cvs.service.js';
import { CreateCvDto } from './dto/create-cv.dto.js';
import { UpdateCvDto } from './dto/update-cv.dto.js';
import type { Request } from 'express';

import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../../guard/jwt-guard.js';
import { Role } from './../../enums/roles.enum.js';
import { Roles } from './../../decorator/roles.decorator.js';

@UseGuards(JwtAuthGuard)
@Roles(Role.ADMIN)
@Controller('cvs')
export class CvsController {
  constructor(private readonly cvsService: CvsService) {}

  @Post('upload')
  create(@Body() createCvDto: CreateCvDto, @Req() req: Request) {
    return this.cvsService.create(createCvDto, req);
  }

  @Get('/record/:id')
  GetSelectedCVS(@Req() req: Request, @Param('id') id: string) {
    return this.cvsService.getSelectedCVS(req, id);
  }

  @Get('recent')
  RecentCVS(@Req() req: Request) {
    console.log('FETCHING RECENT CVS');
    return this.cvsService.RecentCVS(req);
  }

  @Get()
  findAll() {
    return this.cvsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cvsService.findOne(+id);
  }

  @Patch('/update')
  update(@Body() updateCvDto: UpdateCvDto) {
    return this.cvsService.update(updateCvDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.cvsService.remove(+id);
  }
}
