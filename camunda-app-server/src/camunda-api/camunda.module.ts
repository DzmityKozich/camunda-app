import { Module } from '@nestjs/common';
import { ProcessDefinitionModule } from './process-definition-api';
import { ProcessInstanceModule } from './process-instance/process-instance.module';

@Module({
  imports: [ProcessDefinitionModule, ProcessInstanceModule],
})
export class CamundaModule {}
