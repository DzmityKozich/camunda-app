import { Module } from '@nestjs/common';
import { ProcessInstanceController } from './controller/process-instance.controller';
import { ProcessInstanceService } from './service/process-instance.service';
import { IncidentService } from './service/incident.service';
import { StatisticsController } from './controller/statistics.controller';
import { StatisticsService } from './service/statistics.service';
import { UserTaskService } from './service/user-task.service';
import { UserTaskController } from './controller/user-task.controller';

@Module({
  providers: [ProcessInstanceService, IncidentService, StatisticsService, UserTaskService],
  controllers: [ProcessInstanceController, StatisticsController, UserTaskController],
})
export class HistoryApiModule {}
