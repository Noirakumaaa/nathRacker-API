import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service.js';
import { SettingsController } from './settings.controller.js';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';


@Module({
  imports: [
    MulterModule.register({ storage: memoryStorage() }), // keep file in buffer
  ],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule {}
