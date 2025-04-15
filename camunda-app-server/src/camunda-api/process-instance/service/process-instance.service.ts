import { Injectable } from '@nestjs/common';
import { ProcessInstanceFilter } from '../mode/ProcessInstance';
import { filterToQueryParams } from '@/share/lib';

@Injectable()
export class ProcessInstanceService {
  private readonly url = `${process.env.CAMUNDA_API_URL}/process-instance`;

  public getProcessInstances(filter: ProcessInstanceFilter = {}) {
    const params = filterToQueryParams(filter);
    return fetch(`${this.url}?${params}`).then((res) => res.json());
  }
}
