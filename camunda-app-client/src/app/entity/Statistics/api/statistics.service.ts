import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvgTimeToCompleteStatistics, ProcessLifeStatistics, SuccessRate } from '../model/statistics';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class StatisticsService {
	private readonly url = `${environment.SERVER_URL}/history/statistics`;

	constructor(private http: HttpClient) {}

	public getProcessLifeStatistics(processDefinitionId: string): Observable<ProcessLifeStatistics> {
		return this.http.get<ProcessLifeStatistics>(`${this.url}/process-life/${processDefinitionId}`);
	}

	public getSuccessRateStatistics(processDefinitionId: string): Observable<SuccessRate> {
		return this.http.get<SuccessRate>(`${this.url}/success-rate/${processDefinitionId}`);
	}

	public getAverageTimeToComplete(
		processDefinitionId: string,
		fromDate: string,
		toDate: string
	): Observable<AvgTimeToCompleteStatistics[]> {
		return this.http.get<AvgTimeToCompleteStatistics[]>(
			`${this.url}/avg-time-to-complete?processDefinitionId=${processDefinitionId}&fromDate=${fromDate}&toDate=${toDate}`
		);
	}
}
