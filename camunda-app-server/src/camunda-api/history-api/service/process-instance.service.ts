import { Injectable } from '@nestjs/common';
import { ProcessInstanceHistory } from '../model/ProcessInstanceHistory';
import {
  ProcessInstanceHistoryCountFilter,
  ProcessInstanceHistoryFilter,
} from '../model/ProcessInstanceHistoryFilter';
import { filterToQueryParams } from '@share/lib';

@Injectable()
export class ProcessInstanceService {
  private readonly url = `${process.env.CAMUNDA_API_URL}/history/process-instance`;

  public getProcessInstanceHistoryList(
    filter: ProcessInstanceHistoryFilter = {},
  ): Promise<ProcessInstanceHistory[]> {
    const params = filterToQueryParams(filter);
    return fetch(`${this.url}?${params}`).then((res) => res.json());
  }

  public countProcessInstanceHistory(
    filter: ProcessInstanceHistoryCountFilter = {},
  ): Promise<number> {
    const params = filterToQueryParams(filter);
    return fetch(`${this.url}/count?${params}`)
      .then((res) => res.json())
      .then(({ count }) => count);
  }
}
