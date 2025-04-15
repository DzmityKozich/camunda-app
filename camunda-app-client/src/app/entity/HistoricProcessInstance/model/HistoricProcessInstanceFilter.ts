export interface ProcessInstanceHistoryFilter {
  sortOrder?: 'asc' | 'desc';
  sortBy?:
    | 'instanceId'
    | 'definitionId'
    | 'definitionKey'
    | 'definitionName'
    | 'definitionVersion'
    | 'businessKey'
    | 'startTime'
    | 'endTime'
    | 'duration'
    | 'tenantId';

  /** Restrict to instances that are active. */
  active?: boolean;

  /** Restrict to instances that are suspended. */
  suspended?: boolean;

  /** Restrict to instances that are completed. */
  completed?: boolean;

  /** Restrict to instances that are externallyTerminated. */
  externallyTerminated?: boolean;

  /** Restrict to instances that are internallyTerminated. */
  internallyTerminated?: boolean;

  /** Only include finished process instances. This flag includes all process instances that are completed or terminated. Value may only be `true`, as `false` is the default behavior. */
  finished?: boolean;

  /** Only include unfinished process instances. Value may only be true, as false is the default behavior. */
  unfinished?: boolean;

  /** Filter by the process definition the instances run on. */
  processDefinitionId?: string;
}

export type ProcessInstanceHistoryCountFilter = Omit<
  ProcessInstanceHistoryFilter,
  'sortOrder' | 'sortBy'
>;
