import { Body, Controller, Post } from '@nestjs/common';
import { UserTaskService } from '../service/user-task.service';
import { HistoricTaskFilter, HistoricTaskFilterCount } from '../model/HistoricTaskFilter';

@Controller('user-task')
export class UserTaskController {
  constructor(private userTaskService: UserTaskService) {}

  @Post()
  getUserTaskHistoryList(@Body() filter: HistoricTaskFilter) {
    return this.userTaskService.getUserTaskHistoryList(filter);
  }

  @Post('count')
  countUserTaskHistoryList(@Body() filter: HistoricTaskFilterCount) {
    return this.userTaskService.countUserTaskHistory(filter);
  }
}
