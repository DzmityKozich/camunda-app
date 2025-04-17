import { Injectable } from '@nestjs/common';
import { HistoricTask } from '../model/HistoricTask';
import { HistoricTaskFilter, HistoricTaskFilterCount } from '../model/HistoricTaskFilter';
import { filterToQueryParams } from '@/share/lib';

@Injectable()
export class UserTaskService {
  private readonly url = `${process.env.CAMUNDA_API_URL}/history/task`;

  public getUserTaskHistoryList(filter: HistoricTaskFilter = {}): Promise<HistoricTask[]> {
    const params = filterToQueryParams(filter);
    return fetch(`${this.url}?${params}`).then((res) => res.json());
  }

  public countUserTaskHistory(filter: HistoricTaskFilterCount = {}): Promise<number> {
    const params = filterToQueryParams(filter);
    return fetch(`${this.url}/count?${params}`)
      .then((res) => res.json())
      .then(({ count }) => count);
  }
}
