export interface ProcessDefinition {
  /** The id of the process definition. */
  id: string;

  /** The key of the process definition, i.e., the id of the BPMN 2.0 XML process definition. */
  key: string;

  /** The category of the process definition. */
  category: string;

  /** The description of the process definition. */
  description: string;

  /** The name of the process definition. */
  name: string;

  /** The version of the process definition that the engine assigned to it. */
  version: number;

  /** The file name of the process definition. */
  resource: string;

  /** The deployment id of the process definition. */
  deploymentId: string;

  /** The file name of the process definition diagram, if it exists. */
  diagram: string;

  /** A flag indicating whether the definition is suspended or not. */
  suspended: boolean;

  /** A flag indicating whether the definition is suspended or not. */
  tenantId: string;

  /** The version tag of the process or null when no version tag is set */
  versionTag: string;

  /** History time to live value of the process definition. Is used within History cleanup. */
  historyTimeToLive: number;

  /** A flag indicating whether the process definition is startable in Tasklist or not. */
  startableInTasklist: boolean;
}

export interface ProcessDefinitionFilter {
  processDefinitionId?: string;
  name?: string;
  key?: string;
  category?: string;
  sortBy?:
    | 'category'
    | 'key'
    | 'id'
    | 'name'
    | 'version'
    | 'deploymentId'
    | 'deployTime'
    | 'tenantId'
    | 'versionTag';
  sortOrder?: string;
  latestVersion?: boolean;
  tenantId?: string;
  active?: boolean;
  suspended?: boolean;
}
