import { Module } from '@nestjs/common';
import { ProcessDefinitionModule } from './process-definition-api';
import { ProcessInstanceModule } from './process-instance/process-instance.module';
import { HistoryApiModule } from './history-api';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    ProcessDefinitionModule,
    ProcessInstanceModule,
    HistoryApiModule,
    RouterModule.register([
      {
        path: 'history',
        module: HistoryApiModule,
      },
    ]),
  ],
})
export class CamundaModule {}
