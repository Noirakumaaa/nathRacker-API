import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { JwtStrategy } from './../component/jwt.strategy.js';
import { BusModule } from './bus/bus.module.js';
import { SwdiModule } from './swdi/swdi.module.js';
import { AlldocumentsModule } from './alldocuments/alldocuments.module.js';
import { PcnModule } from './lcn/lcn.module.js';
import { CvsModule } from './cvs/cvs.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY || 'i12*^(@G2315dsi2193T',
      signOptions: { expiresIn: '1h' },
    }),
    AuthModule,
    PrismaModule,
    BusModule,
    SwdiModule,
    AlldocumentsModule,
    PcnModule,
    CvsModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})

export class AppModule {}