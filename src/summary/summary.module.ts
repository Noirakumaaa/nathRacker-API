import { Module } from '@nestjs/common';
import { SummaryController } from './summary.controller.js';
import { SummaryService } from './summary.service.js';
import { PrismaModule } from '../prisma/prisma.module.js'; // adjust path

@Module({
  imports: [PrismaModule],
  controllers: [SummaryController],
  providers: [SummaryService],
})
export class SummaryModule {}