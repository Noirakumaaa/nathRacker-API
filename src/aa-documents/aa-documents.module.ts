import { Module } from '@nestjs/common';
import { AaDocumentsController } from './aa-documents.controller.js';
import { AaDocumentsService } from './aa-documents.service.js';

@Module({
  controllers: [AaDocumentsController],
  providers: [AaDocumentsService],
})
export class AaDocumentsModule {}
