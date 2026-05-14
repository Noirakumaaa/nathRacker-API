import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AaRemarksService } from './aa-remarks.service.js';
import { CreateAaRemarkDto } from './dto/create-aa-remark.dto.js';
import { UpdateAaRemarkDto } from './dto/update-aa-remark.dto.js';
import { JwtAuthGuard } from '../../guard/jwt-guard.js';
import { Role } from '../../enums/roles.enum.js';
import { Roles } from '../../decorator/roles.decorator.js';

@UseGuards(JwtAuthGuard)
@Controller()
export class AaRemarksController {
  constructor(private readonly aaRemarksService: AaRemarksService) {}

  /** POST /aa-documents/:id/remarks */
  @Post('aa-documents/:id/remarks')
  @Roles(Role.ENCODER, Role.ADMIN)
  create(@Param('id') documentId: string, @Body() dto: CreateAaRemarkDto) {
    return this.aaRemarksService.create(documentId, dto);
  }

  /** PATCH /aa-remarks/:id */
  @Patch('aa-remarks/:id')
  @Roles(Role.ENCODER, Role.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateAaRemarkDto) {
    return this.aaRemarksService.update(id, dto);
  }

  /** DELETE /aa-remarks/:id */
  @Delete('aa-remarks/:id')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.aaRemarksService.remove(id);
  }
}
