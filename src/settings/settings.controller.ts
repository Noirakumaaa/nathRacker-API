import {
  Controller,
  Post,
  Get,
  Body,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SettingsService } from './settings.service.js';
import type { Module } from './dto/create-setting.dto.js';
import type { Request } from 'express';
import { JwtAuthGuard } from './../../guard/jwt-guard.js';
import { Role } from './../../enums/roles.enum.js';
import { Roles } from './../../decorator/roles.decorator.js';

@UseGuards(JwtAuthGuard)
@Roles(Role.ADMIN) 
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  async importFile(
    @UploadedFile() file: Express.Multer.File,
    @Query('module') module: Module,
    @Req() req: Request,
  ) {
    if (!file) throw new BadRequestException('No file uploaded');
    if (!module) throw new BadRequestException('Module is required');

    return this.settingsService.processImport(file, module, req);
  }


  @Get("UserInfo")
  GetUserInfo(
    @Req() req : Request
  ){
    return this.settingsService.GetUserInfo(req);
  }
}