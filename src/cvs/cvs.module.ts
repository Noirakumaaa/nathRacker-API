import { Module } from '@nestjs/common';
import { CvsService } from './cvs.service.js';
import { CvsController } from './cvs.controller.js';

@Module({
  controllers: [CvsController],
  providers: [CvsService],
})
export class CvsModule {}
