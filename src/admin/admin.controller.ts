import {
  Controller,
  Req,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AdminService } from './admin.service.js';
import { CreateAdminDto, CreateBarangay } from './dto/create-admin.dto.js';
import { CreateLgu } from './dto/create-admin.dto.js';
import type { Request } from 'express';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../../guard/jwt-guard.js';
import { Role } from './../../enums/roles.enum.js';
import { Roles } from './../../decorator/roles.decorator.js';
import { CreateBarangayDto } from './dto/create-barangay.dto.js';
import { CreateRegisterAccount } from './dto/create-register.dto.js';
import { UpdateEmployeeDto } from './dto/update-employee.dto.js';

@UseGuards(JwtAuthGuard)
@Roles(Role.ADMIN)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}


  @Post('register')
  registerAccount(@Body() createAuthDto: CreateRegisterAccount) {
    return this.adminService.Register(createAuthDto);
  }


  @Get('count/documents')
  alldocumentCountbyId(@Req() req: Request) {
    return this.adminService.alldocumentCountbyId(req);
  }

  @Get('count/documents/by-office')
  documentCountByOffice(@Query('officeId') officeId: string) {
    return this.adminService.documentCountByOffice(Number(officeId));
  }

  @Get('count/documents/all')
  documentCountAll() {
    return this.adminService.documentCountAll();
  }

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Post("/lgu")
  createLgu(
    @Body() lgu: CreateLgu, 
    @Req() req: Request) {
    return this.adminService.createLgu(lgu, req);
  }

  @Post("/operations-office")
  createOperationOffice(
    @Body() OO: CreateBarangay, 
    @Req() req: Request) {
    return this.adminService.createOperationsOffice(OO, req);
  }

  @Post("/barangay")
  createBarangay(
    @Body() barangay: CreateBarangayDto, 
    @Req() req: Request) {
    return this.adminService.createBarangay(barangay, req);
  }

  @Get('/get/assignedArea')
  getAssignedAreas(){
    return this.adminService.getAssignedArea()
  }

  @Get('/employees')
  getEmployees() {
    return this.adminService.getEmployees();
  }

  @Patch('/employee/:id')
  updateEmployee(@Param('id') id: string, @Body() dto: UpdateEmployeeDto) {
    return this.adminService.updateEmployee(Number(id), dto);
  }

}
