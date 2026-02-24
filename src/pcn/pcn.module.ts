import { Module } from '@nestjs/common';
import { PcnService } from './pcn.service.js';
import { PcnController } from './pcn.controller.js';

@Module({
  controllers: [PcnController],
  providers: [PcnService],
})
export class PcnModule {}
