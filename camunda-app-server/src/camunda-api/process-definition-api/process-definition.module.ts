import { Module } from '@nestjs/common';
import { ProcessDefinitionService } from './service/process-definition.service';
import { ProcessDefinitionController } from './controller/process-definition.controller';

@Module({
  providers: [ProcessDefinitionService],
  controllers: [ProcessDefinitionController],
})
export class ProcessDefinitionModule {}
