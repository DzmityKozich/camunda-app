import { Injectable } from '@nestjs/common';
import {
  ProcessDefinition,
  ProcessDefinitionFilter,
} from '../model/ProcessDefinition';
import { filterToQueryParams } from '@share/lib';
import { ProcessDefinitionDiagram } from '../model/ProcessDefinitionDiagram';

@Injectable()
export class ProcessDefinitionService {
  private readonly baseUrl = `${process.env.CAMUNDA_API_URL}/process-definition`;

  public getProcessDefinitionList(
    filter: ProcessDefinitionFilter = {},
  ): Promise<ProcessDefinition[]> {
    const params = filterToQueryParams(filter);
    return fetch(`${this.baseUrl}?${params}`).then((res) => res.json());
  }

  public getProcessDefinitionXml(id: string): Promise<string> {
    return fetch(`${this.baseUrl}/${id}/xml`).then((res) => res.json());
  }
}
