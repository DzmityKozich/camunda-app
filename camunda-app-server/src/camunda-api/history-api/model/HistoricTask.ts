export interface HistoricTask {
  /**	The task id.  */
  id: string;

  /**	The key of the process definition the task belongs to.  */
  processDefinitionKey: string;

  /**	The id of the process definition the task belongs to.  */
  processDefinitionId: string;

  /**	The id of the process instance the task belongs to.  */
  processInstanceId: string;

  /**	The id of the execution the task belongs to.  */
  executionId: string;

  /**	The key of the case definition the task belongs to.  */
  caseDefinitionKey: string;

  /**	The id of the case definition the task belongs to.  */
  caseDefinitionId: string;

  /**	The id of the case instance the task belongs to.  */
  caseInstanceId: string;

  /**	The id of the case execution the task belongs to.  */
  caseExecutionId: string;

  /**	The id of the activity that this object is an instance of.  */
  activityInstanceId: string;

  /**	The task name.  */
  name: string;

  /**	The task's description.  */
  description: string;

  /**	The task's delete reason.  */
  deleteReason: string;

  /**	The owner's id.  */
  owner: string;

  /**	The assignee's id.  */
  assignee: string;

  /**	The time the task was started. Default format* yyyy-MM-dd'T'HH:mm:ss.SSSZ.  */
  startTime: string;

  /**	The time the task ended. Default format* yyyy-MM-dd'T'HH:mm:ss.SSSZ.  */
  endTime: string;

  /**	The time the task took to finish (in milliseconds).  */
  duration: number;

  /**	The task's key.  */
  taskDefinitionKey: string;

  /**	The task's priority.  */
  priority: number;

  /**	The task's due date. Default format* yyyy-MM-dd'T'HH:mm:ss.SSSZ.  */
  due: string;

  /**	The id of the parent task, if this task is a subtask.  */
  parentTaskId: string;

  /**	The follow-up date for the task. Default format* yyyy-MM-dd'T'HH:mm:ss.SSSZ.  */
  followUp: string;

  /**	The tenant id of the task instance.  */
  tenantId: string;

  /**	The time after which the task should be removed by the History Cleanup job. Default format* yyyy-MM-dd'T'HH:mm:ss.SSSZ.  */
  removalTime: string;

  /**	The process instance id of the root process instance that initiated the process containing this task.  */
  rootProcessInstanceId: string;
}
