import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SettingsService } from './settings.service.js';
import { SettingsController } from './settings.controller.js';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY || 'i12*^(@G2315dsi2193T',
      signOptions: { expiresIn: '1h' },
    }),
    MulterModule.register({ storage: memoryStorage() }), // keep file in buffer
  ],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule {}
