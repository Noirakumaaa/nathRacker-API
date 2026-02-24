import { Module } from '@nestjs/common';
import { AlldocumentsService } from './alldocuments.service.js';
import { AlldocumentsController } from './alldocuments.controller.js';

@Module({
  controllers: [AlldocumentsController],
  providers: [AlldocumentsService],
})
export class AlldocumentsModule {}
