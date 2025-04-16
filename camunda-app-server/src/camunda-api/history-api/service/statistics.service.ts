import { Injectable } from '@nestjs/common';
import { ProcessInstanceService } from './process-instance.service';
import { ProcessInstanceHistoryCountFilter } from '../model/ProcessInstanceHistoryFilter';
import { IncidentService } from './incident.service';

type ProcessState = 'active' | 'suspended' | 'completed';
type ProcessLifeStatistics = Record<ProcessState, number>;
type ProcessInstanceHistoryFilters = Record<
  ProcessState,
  ProcessInstanceHistoryCountFilter
>;

export interface SuccessRate {
  total: number;
  withIncidents: number;
}

@Injectable()
export class StatisticsService {
  private filters: ProcessInstanceHistoryFilters = {
    active: { active: true },
    suspended: { suspended: true },
    completed: { completed: true },
  };

  constructor(
    private historicProcessInstanceService: ProcessInstanceService,
    private historicIncidentService: IncidentService,
  ) {}

  public async getHistoryStatistics(
    processDefinitionId: string,
  ): Promise<ProcessLifeStatistics> {
    const reqs = Object.values(this.filters).map((filter) =>
      this.historicProcessInstanceService.countProcessInstanceHistory({
        ...filter,
        processDefinitionId,
      }),
    );

    return new Promise<ProcessLifeStatistics>((resolve, reject) => {
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

  public async getSuccessRateStatistics(
    processDefinitionId: string,
  ): Promise<SuccessRate> {
    const processesReq =
      this.historicProcessInstanceService.countProcessInstanceHistory({
        processDefinitionId,
        unfinished: true,
      });
    const incidentsReq = this.historicIncidentService.getHistoricIncidentsCount(
      { processDefinitionId },
    );

    const [total, withIncidents] = await Promise.all([
      processesReq,
      incidentsReq,
    ]);

    return { total, withIncidents };
  }
}
