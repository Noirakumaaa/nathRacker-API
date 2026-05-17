import { Module } from '@nestjs/common';
import { AaModulesController } from './aa-modules.controller.js';
import { AaModulesService } from './aa-modules.service.js';

@Module({
  controllers: [AaModulesController],
  providers: [AaModulesService],
  exports: [AaModulesService],
})
export class AaModulesModule {}
