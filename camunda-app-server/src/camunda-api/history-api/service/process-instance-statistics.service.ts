import { Injectable } from '@nestjs/common';
import { ProcessInstanceService } from './process-instance.service';
import { ProcessInstanceHistoryCountFilter } from '../model/ProcessInstanceHistoryFilter';

type ProcessState = 'active' | 'suspended' | 'completed';
type ProcessInstanceHistoryStatistics = Record<ProcessState, number>;
type ProcessInstanceHistoryFilters = Record<
  ProcessState,
  ProcessInstanceHistoryCountFilter
>;

@Injectable()
export class ProcessInstanceStatisticsService {
  private filters: ProcessInstanceHistoryFilters = {
    active: { finished: true },
    suspended: { suspended: true },
    completed: { completed: true },
  };

  constructor(private historicProcessInstanceService: ProcessInstanceService) {}

  public async getHistoryStatistics() {
    return await this.fetchData();
  }

  private fetchData(): Promise<ProcessInstanceHistoryStatistics> {
    const reqs = Object.values(this.filters).map((filter) =>
      this.historicProcessInstanceService.countProcessInstanceHistory(filter),
    );

    return new Promise((resolve, reject) => {
      Promise.all(reqs)
        .then((values) =>
          resolve({
            active: values[0],
            suspended: values[1],
            completed: values[2],
          }),
        )
        .catch(reject);
    });
  }
}
