export interface AvgTimeToCompleteFilter {
  processDefinitionId: string;
  fromDate: string;
  toDate: string;
}

export interface AvgTimeToCompleteStatistics {
  date: string;
  avgTime: number;
}
