export type ProcessLifeStatistics = Record<
  'active' | 'suspended' | 'completed',
  number
>;

export interface SuccessRate {
  total: number;
  withIncidents: number;
}
