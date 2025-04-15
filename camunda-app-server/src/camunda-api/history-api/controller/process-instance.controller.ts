import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProcessInstanceService } from '../service/process-instance.service';
import {
  ProcessInstanceHistoryCountFilter,
  ProcessInstanceHistoryFilter,
} from '../model/ProcessInstanceHistoryFilter';
import { ProcessInstanceStatisticsService } from '../service/process-instance-statistics.service';

@Controller('process-instance')
export class ProcessInstanceController {
  constructor(
    private processInstanceService: ProcessInstanceService,
    private processInstanceStatisticsService: ProcessInstanceStatisticsService,
  ) {}

  @Post()
  getProcessInstanceHistoryList(@Body() filter: ProcessInstanceHistoryFilter) {
    return this.processInstanceService.getProcessInstanceHistoryList(filter);
  }

  @Post('count')
  countProcessInstanceHistoryList(
    @Body() filter: ProcessInstanceHistoryCountFilter,
  ) {
    return this.processInstanceService.countProcessInstanceHistory(filter);
  }

  @Get('statistics')
  getProcessInstanceStatistics() {
    return this.processInstanceStatisticsService.getHistoryStatistics();
  }
}
