import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProcessDefinitionService } from '../service/process-definition.service';
import { Role } from '@/share/decorators';
import { Roles } from '@/share/model';
import { AuthGuard } from '@/share/guards';
import { ProcessDefinitionFilter } from '../model/ProcessDefinition';

@Controller('process-definition')
export class ProcessDefinitionController {
  constructor(private processDefinitionService: ProcessDefinitionService) {}

  @Post()
  public getProcessDefinitionList(@Body() filter?: ProcessDefinitionFilter) {
    return this.processDefinitionService.getProcessDefinitionList(filter);
  }
}
