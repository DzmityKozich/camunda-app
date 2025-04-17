export interface HistoricUserTaskFilter {
	/** Filter by task id. */
	taskId?: string;

	/** Filter by parent task id. */
	taskParentTaskId?: string;

	/** Filter by process instance id. */
	processInstanceId?: string;

	/** Filter by process instance business key. */
	processInstanceBusinessKey?: string;

	/** Filter by process instances with one of the give business keys. The keys need to be in a comma-separated list. */
	processInstanceBusinessKeyIn?: string;

	/** Filter by process instance business key that has the parameter value as a substring. */
	processInstanceBusinessKeyLike?: string;

	/** Filter by the id of the execution that executed the task. */
	executionId?: string;

	/** Filter by process definition id. */
	processDefinitionId?: string;

	/** Restrict to tasks that belong to a process definition with the given key. */
	processDefinitionKey?: string;

	/** Restrict to tasks that belong to a process definition with the given name. */
	processDefinitionName?: string;

	/** Filter by case instance id. */
	caseInstanceId?: string;

	/** Filter by the id of the case execution that executed the task. */
	caseExecutionId?: string;

	/** Filter by case definition id. */
	caseDefinitionId?: string;

	/** Restrict to tasks that belong to a case definition with the given key. */
	caseDefinitionKey?: string;

	/** Restrict to tasks that belong to a case definition with the given name. */
	caseDefinitionName?: string;

	/** Only include tasks which belong to one of the passed and comma-separated activity instance ids. */
	activityInstanceIdIn?: string;

	/** Restrict to tasks that have the given name. */
	taskName?: string;

	/** Restrict to tasks that have a name with the given parameter value as substring. */
	taskNameLike?: string;

	/** Restrict to tasks that have the given description. */
	taskDescription?: string;

	/** Restrict to tasks that have a description that has the parameter value as a substring. */
	taskDescriptionLike?: string;

	/** Restrict to tasks that have the given key. */
	taskDefinitionKey?: string;

	/** Restrict to tasks that have one of the passed and comma-separated task definition keys. */
	taskDefinitionKeyIn?: string;

	/** Restrict to tasks that have the given delete reason. */
	taskDeleteReason?: string;

	/** Restrict to tasks that have a delete reason that has the parameter value as a substring. */
	taskDeleteReasonLike?: string;

	/** Restrict to tasks that the given user is assigned to. */
	taskAssignee?: string;

	/** Restrict to tasks that are assigned to users with the parameter value as a substring. */
	taskAssigneeLike?: string;

	/** Restrict to tasks that the given user owns. */
	taskOwner?: string;

	/** Restrict to tasks that are owned by users with the parameter value as a substring. */
	taskOwnerLike?: string;

	/** Restrict to tasks that have the given priority. */
	taskPriority?: number;

	/** If set to true, restricts the query to all tasks that are assigned. */
	assigned?: boolean;

	/** If set to true, restricts the query to all tasks that are unassigned. */
	unassigned?: boolean;

	/** Only include finished tasks. Value may only be true, as false is the default behavior. */
	finished?: boolean;

	/** Only include unfinished tasks. Value may only be true, as false is the default behavior. */
	unfinished?: boolean;

	/** Only include tasks of finished processes. Value may only be true, as false is the default behavior. */
	processFinished?: boolean;

	/** Only include tasks of unfinished processes. Value may only be true, as false is the default behavior. */
	processUnfinished?: boolean;

	/** Restrict to tasks that are due on the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
	taskDueDate?: string;

	/** Restrict to tasks that are due before the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
	taskDueDateBefore?: string;

	/** Restrict to tasks that are due after the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
	taskDueDateAfter?: string;

	/** Only include tasks which have no due date. Value may only be true, as false is the default behavior. */
	withoutTaskDueDate?: string;

	/** Restrict to tasks that have a followUp date on the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
	taskFollowUpDate?: string;

	/** Restrict to tasks that have a followUp date before the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
	taskFollowUpDateBefore?: string;

	/** Restrict to tasks that have a followUp date after the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
	taskFollowUpDateAfter?: string;

	/** Restrict to tasks that were started before the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
	startedBefore?: string;

	/** Restrict to tasks that were started after the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
	startedAfter?: string;

	/** Restrict to tasks that were finished before the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
	finishedBefore?: string;

	/** Restrict to tasks that were finished after the given date. By default*, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. */
	finishedAfter?: string;

	/** Filter by a comma-separated list of tenant ids. A task instance must have one of the given tenant ids. */
	tenantIdIn?: string;

	/** Only include historic task instances that belong to no tenant. Value may only be true, as false is the default behavior. */
	withoutTenantId?: boolean;
}

export type HistoricTaskFilterCount = Omit<HistoricUserTaskFilter, 'sortOrder' | 'sortBy'>;
