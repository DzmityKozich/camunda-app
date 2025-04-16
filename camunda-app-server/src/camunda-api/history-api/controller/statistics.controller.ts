import { Controller, Get, Param } from '@nestjs/common';
import { StatisticsService } from '../service/statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private statService: StatisticsService) {}

  @Get('process-life/:processDefinitionId')
  public getProcessInstanceStatistics(
    @Param('processDefinitionId') processDefinitionId: string,
  ) {
    return this.statService.getHistoryStatistics(processDefinitionId);
  }

  @Get('success-rate/:processDefinitionId')
  public getProcessSuccessRateStatistics(
    @Param('processDefinitionId') processDefinitionId: string,
  ) {
    return this.statService.getSuccessRateStatistics(processDefinitionId);
  }
}
