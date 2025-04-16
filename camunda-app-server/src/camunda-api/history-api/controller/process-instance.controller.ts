import { Body, Controller, Post } from '@nestjs/common';
import { ProcessInstanceService } from '../service/process-instance.service';
import {
  ProcessInstanceHistoryCountFilter,
  ProcessInstanceHistoryFilter,
} from '../model/ProcessInstanceHistoryFilter';

@Controller('process-instance')
export class ProcessInstanceController {
  constructor(private processInstanceService: ProcessInstanceService) {}

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
}
