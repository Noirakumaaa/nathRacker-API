import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { PcnService } from './pcn.service.js';
import { CreatePcnDto } from './dto/create-pcn.dto.js';
import { UpdatePcnDto } from './dto/update-pcn.dto.js';
import type { Request } from 'express';
@Controller('pcn')
export class PcnController {
  constructor(private readonly pcnService: PcnService) {}

  @Post('upload')
  create(
    @Body() createPcnDto: CreatePcnDto,
    @Req() req: Request,
  ) {
    return this.pcnService.create(createPcnDto, req);
  }

  @Get('UserRecent')
  UserRecent(@Req() req: Request) {
    return this.pcnService.UserRecent(req);
  }

  @Get('records/:id')
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
