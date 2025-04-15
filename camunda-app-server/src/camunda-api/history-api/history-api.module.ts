import { Module } from '@nestjs/common';
import { ProcessInstanceController } from './controller/process-instance.controller';
import { ProcessInstanceService } from './service/process-instance.service';
import { ProcessInstanceStatisticsService } from './service/process-instance-statistics.service';

@Module({
  providers: [ProcessInstanceService, ProcessInstanceStatisticsService],
  controllers: [ProcessInstanceController],
})
export class HistoryApiModule {}
