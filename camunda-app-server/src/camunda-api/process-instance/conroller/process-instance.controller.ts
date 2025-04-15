import { Body, Controller, Post } from '@nestjs/common';
import { ProcessInstanceFilter } from '../mode/ProcessInstance';
import { ProcessInstanceService } from '../service/process-instance.service';

@Controller('process-instance')
export class ProcessInstanceController {
  constructor(private processInstanceService: ProcessInstanceService) {}

  @Post()
  public getProcessDefinitionList(@Body() filter?: ProcessInstanceFilter) {
    return this.processInstanceService.getProcessInstances(filter);
  }
}
