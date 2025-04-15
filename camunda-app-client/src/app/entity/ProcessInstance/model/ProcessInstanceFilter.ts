export interface ProcessInstanceFilter {
  sortBy?:
    | 'instanceId'
    | 'definitionKey'
    | 'definitionId'
    | 'tenantId'
    | 'businessKey';
  sortOrder?: 'desc' | 'asc';
  processDefinitionId?: string;
}
