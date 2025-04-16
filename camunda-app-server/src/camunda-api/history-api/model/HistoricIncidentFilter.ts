export interface HistoricIncidentFilter {
  /**  Restricts to incidents that have the given id. */
  incidentId?: string;

  /**  Restricts to incidents that belong to the given incident type. See the User Guide for a list of incident types. */
  incidentType?: string;

  /**  Restricts to incidents that have the given incident message. */
  incidentMessage?: string;

  /**  Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). */
  incidentMessageLike?: string;

  /**  Restricts to incidents that belong to a process definition with the given id. */
  processDefinitionId?: string;

  /**  Restricts to incidents that have the given processDefinitionKey. */
  processDefinitionKey?: string;

  /**  Restricts to incidents that have one of the given process definition keys. */
  processDefinitionKeyIn?: string;

  /**  Restricts to incidents that belong to a process instance with the given id. */
  processInstanceId?: string;

  /**  Restricts to incidents that belong to an execution with the given id. */
  executionId?: string;

  /**  Restricts to incidents that have a createTime date before the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
  createTimeBefore?: string;

  /**  Restricts to incidents that have a createTime date after the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
  createTimeAfter?: string;

  /**  Restricts to incidents that have an endTimeBefore date before the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
  endTimeBefore?: string;

  /**  Restricts to incidents that have an endTimeAfter date after the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
  endTimeAfter?: string;

  /**  Restricts to incidents that belong to an activity with the given id. */
  activityId?: string;

  /**  Restricts to incidents that were created due to the failure of an activity with the given id. */
  failedActivityId?: string;

  /**  Restricts to incidents that have the given incident id as cause incident. */
  causeIncidentId?: string;

  /**  Restricts to incidents that have the given incident id as root cause incident. */
  rootCauseIncidentId?: string;

  /**  Restricts to incidents that have the given parameter set as configuration. */
  configuration?: string;

  /**  Restricts to incidents that have the given parameter set as history configuration. */
  historyConfiguration?: string;

  /**  Restricts to incidents that have one of the given comma-separated tenant ids. */
  tenantIdIn?: string;

  /**  Only include historic incidents that belong to no tenant. Value may only be true, as false is the default behavior. */
  withoutTenantId?: string;

  /**  Restricts to incidents that have one of the given comma-separated job definition ids. */
  jobDefinitionIdIn?: string;

  /**  Restricts to incidents that are open. */
  open?: boolean;

  /**  Restricts to incidents that are deleted. */
  deleted?: boolean;

  /**  Restricts to incidents that are resolved. */
  resolved?: boolean;

  /**  Sort the results lexicographically by a given criterion. Valid values are incidentId, incidentMessage, createTime, endTime, incidentType, executionId, activityId, processInstanceId, processDefinitionId, processDefinitionKey, causeIncidentId, rootCauseIncidentId, configuration, historyConfiguration, tenantId and incidentState. Must be used in conjunction with the sortOrder parameter. */
  sortBy?:
    | 'incidentId'
    | 'incidentMessage'
    | 'createTime'
    | 'endTime'
    | 'incidentType'
    | 'executionId'
    | 'activityId'
    | 'processInstanceId'
    | 'processDefinitionId'
    | 'processDefinitionKey'
    | 'causeIncidentId'
    | 'rootCauseIncidentId'
    | 'configuration'
    | 'historyConfiguration'
    | 'tenantId'
    | 'incidentState';

  /**  Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. */
  sortOrder?: 'asc' | 'desc';
}

export type HistoricIncidentFilterCount = Omit<
  HistoricIncidentFilter,
  'sortOrder' | 'sortBy'
>;
