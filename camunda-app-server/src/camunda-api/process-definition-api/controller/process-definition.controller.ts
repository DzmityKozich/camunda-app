import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ProcessDefinitionService } from '../service/process-definition.service';
import { ProcessDefinitionFilter } from '../model/ProcessDefinition';

@Controller('process-definition')
export class ProcessDefinitionController {
  constructor(private processDefinitionService: ProcessDefinitionService) {}

  @Post()
  @HttpCode(200)
  public getProcessDefinitionList(@Body() filter?: ProcessDefinitionFilter) {
    return this.processDefinitionService.getProcessDefinitionList(filter);
  }

  @Get(':id/xml')
  public getProcessDefinitionXml(@Param('id') id: string) {
    return this.processDefinitionService.getProcessDefinitionXml(id);
  }
}
