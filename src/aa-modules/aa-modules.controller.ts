import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AaModulesService } from './aa-modules.service.js';
import { CreateAaModuleDto } from './dto/create-aa-module.dto.js';
import { UpdateAaModuleDto } from './dto/update-aa-module.dto.js';
import { JwtAuthGuard } from '../../guard/jwt-guard.js';
import { Role } from '../../enums/roles.enum.js';
import { Roles } from '../../decorator/roles.decorator.js';

@UseGuards(JwtAuthGuard)
@Controller('aa-modules')
export class AaModulesController {
  constructor(private readonly aaModulesService: AaModulesService) {}

  /** GET /aa-modules — list all active modules */
  @Get()
  findAll() {
    return this.aaModulesService.findAll();
  }

  /** GET /aa-modules/:code — single module by code */
  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.aaModulesService.findOne(code);
  }

  /** POST /aa-modules — create a new module (admin only) */
  @Post()
  @Roles(Role.ADMIN)
  create(@Body() dto: CreateAaModuleDto) {
    return this.aaModulesService.create(dto);
  }

  /** PATCH /aa-modules/:code — update a module (admin only) */
  @Patch(':code')
  @Roles(Role.ADMIN)
  update(@Param('code') code: string, @Body() dto: UpdateAaModuleDto) {
    return this.aaModulesService.update(code, dto);
  }

  /** DELETE /aa-modules/:code — delete a module and all its documents (admin only) */
  @Delete(':code')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('code') code: string) {
    return this.aaModulesService.remove(code);
  }
}
