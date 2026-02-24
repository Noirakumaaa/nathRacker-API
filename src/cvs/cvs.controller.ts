import { Controller, Get, Post, Body, Patch, Param, Delete , Req} from '@nestjs/common';
import { CvsService } from './cvs.service.js';
import { CreateCvDto } from './dto/create-cv.dto.js';
import { UpdateCvDto } from './dto/update-cv.dto.js';
import type { Request } from 'express';
@Controller('cvs')
export class CvsController {
  constructor(private readonly cvsService: CvsService) {}

  @Post('upload')
  create(
    @Body() createCvDto: CreateCvDto,
    @Req() req : Request
  ) {
    return this.cvsService.create(createCvDto,req);
  }

  @Get()
  findAll() {
    return this.cvsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cvsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCvDto: UpdateCvDto) {
    return this.cvsService.update(+id, updateCvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cvsService.remove(+id);
  }
}
