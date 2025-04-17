import { Injectable } from '@nestjs/common';
import { getFullDay, startOfDay, toJavaDate } from '@share/lib';
import { ProcessInstanceService } from './process-instance.service';
import { ProcessInstanceHistoryCountFilter, ProcessInstanceHistoryFilter } from '../model/ProcessInstanceHistoryFilter';
import { IncidentService } from './incident.service';
import { AvgTimeToCompleteFilter, AvgTimeToCompleteStatistics } from '../model/types';
import { ProcessInstanceHistory } from '../model/ProcessInstanceHistory';

type ProcessState = 'active' | 'suspended' | 'completed';
type ProcessLifeStatistics = Record<ProcessState, number>;
type ProcessInstanceHistoryFilters = Record<ProcessState, ProcessInstanceHistoryCountFilter>;

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

  public async getHistoryStatistics(processDefinitionId: string): Promise<ProcessLifeStatistics> {
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

  public async getSuccessRateStatistics(processDefinitionId: string): Promise<SuccessRate> {
    const processesReq = this.historicProcessInstanceService.countProcessInstanceHistory({
      processDefinitionId,
      unfinished: true,
    });
    const incidentsReq = this.historicIncidentService.getHistoricIncidentsCount({ processDefinitionId });

    const [total, withIncidents] = await Promise.all([processesReq, incidentsReq]);

    return { total, withIncidents };
  }

  public async getAverageTimeToComplete(params: AvgTimeToCompleteFilter): Promise<AvgTimeToCompleteStatistics[]> {
    const processes = await this.getProcessInstancesBetween(params);
    const grouped = this.groupProcessesByCompleteDate(processes);
    return Object.entries(grouped).map(([date, value]) => {
      const avgTime = this.countAvgTimeToComplete(value);
      return { date, avgTime };
    });
  }

  private getProcessInstancesBetween({
    fromDate,
    processDefinitionId,
    toDate,
  }: AvgTimeToCompleteFilter): Promise<ProcessInstanceHistory[]> {
    const finishedBefore = toJavaDate(startOfDay(toDate));
    const finishedAfter = toJavaDate(startOfDay(fromDate));
    const filter: ProcessInstanceHistoryFilter = { completed: true, processDefinitionId, finishedBefore, finishedAfter };
    return this.historicProcessInstanceService.getProcessInstanceHistoryList(filter);
  }

  private groupProcessesByCompleteDate(processes: ProcessInstanceHistory[]): Record<string, ProcessInstanceHistory[]> {
    return processes.reduce<Record<string, ProcessInstanceHistory[]>>((acc, process) => {
      const completeDate = getFullDay(process.endTime);
      const prs = acc[completeDate] || [];
      return { ...acc, [completeDate]: [...prs, process] };
    }, {});
  }

  private countAvgTimeToComplete(processes: ProcessInstanceHistory[]): number {
    let sum = 0;
    for (const process of processes) {
      const startTime = Date.parse(process.startTime);
      const endTime = Date.parse(process.endTime);
      sum += endTime - startTime;
    }
    return sum / processes.length;
  }
}
