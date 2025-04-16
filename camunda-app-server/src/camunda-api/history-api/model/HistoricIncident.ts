export interface HistoricIncident {
  /** The id of the incident. */
  id: string;

  /** The key of the process definition this incident is associated with. */
  processDefinitionKey: string;

  /** The id of the process definition this incident is associated with. */
  processDefinitionId: string;

  /** The key of the process definition this incident is associated with. */
  processInstanceId: string;

  /** The id of the execution this incident is associated with. */
  executionId: string;

  /** The time this incident happened. Default format* yyyy-MM-dd'T'HH:mm:ss.SSSZ. */
  createTime: string;

  /** The time this incident has been deleted or resolved. Default format* yyyy-MM-dd'T'HH:mm:ss.SSSZ. */
  endTime: string;

  /** The type of incident, for example: failedJobs will be returned in case of an incident which identified a failed job during the execution of a process instance. See the User Guide for a list of incident types. */
  incidentType: string;

  /** The id of the activity this incident is associated with. */
  activityId: string;

  /** The id of the activity on which the last exception occurred. */
  failedActivityId: string;

  /** The id of the associated cause incident which has been triggered. */
  causeIncidentId: string;

  /** The id of the associated root cause incident which has been triggered. */
  rootCauseIncidentId: string;

  /** The payload of this incident. */
  configuration: string;

  /** The payload of this incident at the time the incident occurred. */
  historyConfiguration: string;

  /** The message of this incident. */
  incidentMessage: string;

  /** The id of the tenant this incident is associated with. */
  tenantId: string;

  /** The job definition id the incident is associated with. */
  jobDefinitionId: string;

  /** If true, this incident is open. */
  open: boolean;

  /** If true, this incident has been deleted. */
  deleted: boolean;

  /** If true, this incident has been resolved. */
  resolved: boolean;

  /** The time after which the incident should be removed by the History Cleanup job. Default format* yyyy-MM-dd'T'HH:mm:ss.SSSZ. */
  removalTime: string;

  /** The process instance id of the root process instance that initiated the process containing this incident. */
  rootProcessInstanceId: string;

  /** The annotation set to the incident. */
  annotation: string;
}
