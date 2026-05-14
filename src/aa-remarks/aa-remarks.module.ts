import { Module } from '@nestjs/common';
import { AaRemarksController } from './aa-remarks.controller.js';
import { AaRemarksService } from './aa-remarks.service.js';

@Module({
  controllers: [AaRemarksController],
  providers: [AaRemarksService],
})
export class AaRemarksModule {}
