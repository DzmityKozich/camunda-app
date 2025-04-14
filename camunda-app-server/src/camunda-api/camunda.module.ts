import { Module } from '@nestjs/common';
import { ProcessDefinitionModule } from './process-definition-api';

@Module({
  imports: [ProcessDefinitionModule],
})
export class CamundaModule {}
