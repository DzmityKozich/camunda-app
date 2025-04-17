export type ProcessLifeStatistics = Record<'active' | 'suspended' | 'completed', number>;

export interface SuccessRate {
	total: number;
	withIncidents: number;
}

export interface AvgTimeToCompleteStatistics {
	date: string;
	avgTime: number;
}
