export interface ProcessInstance {
  /** The id of the process instance. */
  id: string;

  /** The id of the process definition this instance belongs to. */
  definitionId: string;

  /** The business key of the process instance. */
  businessKey: string;

  /**  	The id of the case instance associated with the process instance. */
  caseInstanceId: string;

  /** A flag indicating whether the process instance is suspended or not. */
  suspended: boolean;

  /** The tenant id of the process instance. */
  tenantId: string;
}

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
