export interface HistoricProcessInstance {
  id: string;
  rootProcessInstanceId: string;
  superProcessInstanceId: string;
  superCaseInstanceId: string;
  caseInstanceId: string;
  processDefinitionName: string;
  processDefinitionKey: string;
  processDefinitionVersion: number;
  processDefinitionId: string;
  businessKey: string;
  startTime: string; // ISO format: 'yyyy-MM-dd\'T\'HH:mm:ss.SSSZ'
  endTime: string; // ISO format
  removalTime: string; // ISO format
  durationInMillis: number;
  startUserId: string;
  startActivityId: string;
  deleteReason: string;
  tenantId: string;
  state:
    | 'ACTIVE'
    | 'SUSPENDED'
    | 'COMPLETED'
    | 'EXTERNALLY_TERMINATED'
    | 'INTERNALLY_TERMINATED ';
}
