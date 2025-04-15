import { Module } from '@nestjs/common';
import { ProcessInstanceService } from './service/process-instance.service';
import { ProcessInstanceController } from './conroller/process-instance.controller';

@Module({
  providers: [ProcessInstanceService],
  controllers: [ProcessInstanceController],
})
export class ProcessInstanceModule {}
