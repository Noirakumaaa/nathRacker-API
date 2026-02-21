import { Module } from '@nestjs/common';
import { SwdiService } from './swdi.service.js';
import { SwdiController } from './swdi.controller.js';

@Module({
  controllers: [SwdiController],
  providers: [SwdiService],
})
export class SwdiModule {}
