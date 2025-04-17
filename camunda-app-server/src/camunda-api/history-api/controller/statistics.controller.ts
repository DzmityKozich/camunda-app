import { Controller, Get, Param, Query } from '@nestjs/common';
import { StatisticsService } from '../service/statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private statService: StatisticsService) {}

  @Get('process-life/:processDefinitionId')
  public getProcessInstanceStatistics(@Param('processDefinitionId') processDefinitionId: string) {
    return this.statService.getHistoryStatistics(processDefinitionId);
  }

  @Get('success-rate/:processDefinitionId')
  public getProcessSuccessRateStatistics(@Param('processDefinitionId') processDefinitionId: string) {
    return this.statService.getSuccessRateStatistics(processDefinitionId);
  }

  @Get('avg-time-to-complete')
  public getAverageTimeToComplete(
    @Query('processDefinitionId') processDefinitionId: string,
    @Query('fromDate') fromDate: string,
    @Query('toDate') toDate: string,
  ) {
    return this.statService.getAverageTimeToComplete({ processDefinitionId, fromDate, toDate });
  }
}
