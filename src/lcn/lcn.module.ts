import { Module } from '@nestjs/common';
import { PcnService } from './lcn.service.js';
import { PcnController } from './lcn.controller.js';

@Module({
  controllers: [PcnController],
  providers: [PcnService],
})
export class PcnModule {}
