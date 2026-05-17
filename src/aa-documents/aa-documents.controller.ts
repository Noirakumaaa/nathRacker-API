import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Patch,
  Delete,
  Param,
  Query,
  Res,
  UseGuards,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import type { Response } from 'express';
import { AaDocumentsService } from './aa-documents.service.js';
import { CreateAaDocumentDto } from './dto/create-aa-document.dto.js';
import { UpdateAaDocumentDto } from './dto/update-aa-document.dto.js';
import { QueryAaDocumentsDto } from './dto/query-aa-documents.dto.js';
import { UpsertAaMonthlyDto } from './dto/upsert-aa-monthly.dto.js';
import { JwtAuthGuard } from '../../guard/jwt-guard.js';
import { Role } from '../../enums/roles.enum.js';
import { Roles } from '../../decorator/roles.decorator.js';

@UseGuards(JwtAuthGuard)
@Controller()
export class AaDocumentsController {
  constructor(private readonly aaDocumentsService: AaDocumentsService) {}

  /** GET /aa-modules/:code/documents */
  @Get('aa-modules/:code/documents')
  findByModule(
    @Param('code') code: string,
    @Query() query: QueryAaDocumentsDto,
  ) {
    return this.aaDocumentsService.findByModule(code, query);
  }

  /** POST /aa-modules/:code/documents */
  @Post('aa-modules/:code/documents')
  @Roles(Role.ENCODER, Role.ADMIN)
  create(@Param('code') code: string, @Body() dto: CreateAaDocumentDto) {
    return this.aaDocumentsService.create(code, dto);
  }

  /** POST /aa-modules/:code/import — import documents from .xlsx */
  @Post('aa-modules/:code/import')
  @Roles(Role.ENCODER, Role.ADMIN)
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  async importDocuments(
    @Param('code') code: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('sheet') sheet?: string,
    @Body('year') yearRaw?: string,
  ) {
    if (!file) throw new BadRequestException('No file uploaded.');
    const year = yearRaw ? Number(yearRaw) : undefined;
    if (year !== undefined && (!Number.isInteger(year) || year < 2000 || year > 2100)) {
      throw new BadRequestException('Invalid year value.');
    }
    return this.aaDocumentsService.importFromXlsx(code, file.buffer, sheet, year);
  }

  /** POST /aa-imports/workbook — import all matching AA sheets from one workbook */
  @Post('aa-imports/workbook')
  @Roles(Role.ENCODER, Role.ADMIN)
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  async importWorkbook(
    @UploadedFile() file: Express.Multer.File,
    @Body('year') yearRaw?: string,
  ) {
    if (!file) throw new BadRequestException('No file uploaded.');
    const year = yearRaw ? Number(yearRaw) : undefined;
    if (year !== undefined && (!Number.isInteger(year) || year < 2000 || year > 2100)) {
      throw new BadRequestException('Invalid year value.');
    }
    return this.aaDocumentsService.importWorkbook(file.buffer, year);
  }

  /** GET /aa-modules/:code/export — download as .xlsx */
  @Get('aa-modules/:code/export')
  async exportXlsx(@Param('code') code: string, @Res() res: Response) {
    const buffer = await this.aaDocumentsService.exportToXlsx(code);
    const filename = `${code.toUpperCase()}-export.xlsx`;

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.end(buffer);
  }

  /** GET /aa-documents/check-drn?trackingNo=BDM-0001 */
  @Get('aa-documents/check-drn')
  async checkDrn(@Query('trackingNo') trackingNo: string) {
    if (!trackingNo)
      throw new BadRequestException('trackingNo query param is required.');
    return this.aaDocumentsService.checkTrackingNo(trackingNo);
  }

  /** GET /aa-documents/:id */
  @Get('aa-documents/:id')
  findOne(@Param('id') id: string) {
    return this.aaDocumentsService.findOne(id);
  }

  /** PATCH /aa-documents/:id */
  @Patch('aa-documents/:id')
  @Roles(Role.ENCODER, Role.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateAaDocumentDto) {
    return this.aaDocumentsService.update(id, dto);
  }

  /** DELETE /aa-documents/:id */
  @Delete('aa-documents/:id')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.aaDocumentsService.remove(id);
  }

  /** GET /aa-documents/:id/monthly */
  @Get('aa-documents/:id/monthly')
  getMonthly(@Param('id') id: string) {
    return this.aaDocumentsService.getMonthly(id);
  }

  /** PUT /aa-documents/:id/monthly */
  @Put('aa-documents/:id/monthly')
  @Roles(Role.ENCODER, Role.ADMIN)
  upsertMonthly(@Param('id') id: string, @Body() body: Record<string, unknown>) {
    return this.aaDocumentsService.upsertMonthly(id, body);
  }
}
