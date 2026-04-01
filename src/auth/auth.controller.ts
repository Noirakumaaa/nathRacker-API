import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, UseGuards } from '@nestjs/common';
import express from 'express';
import { AuthService } from './auth.service.js';
import { CreateAuthDto } from './dto/create-auth.dto.js';
//import { UpdateAuthDto } from './dto/update-auth.dto.js';
import { Public } from './../../decorator/jwt-public-decorator.js';
import { JwtAuthGuard } from '../../guard/jwt-guard.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}



  @Public()
  @Post('login')
  login(@Body() createAuthDto: CreateAuthDto,
  @Res() res : express.Response) {
    return this.authService.login(createAuthDto,res);
  }

  @UseGuards(JwtAuthGuard)
  @Get('check-auth')
  checkAuth(@Req() req) {
    return this.authService.checkAuth(req);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Post('sessionTimeout')
  newSessionTime(@Body('sessionTime') sessionTime: string, @Req() req: express.Request) {
    return this.authService.newSessionTime(sessionTime, req);
  }

  @Get('logout')
  logout(@Res() res: express.Response) {
    return this.authService.logout(res);
  }
}
