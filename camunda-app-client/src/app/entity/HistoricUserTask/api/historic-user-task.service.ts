import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoricUserTask } from 'entityHistoricUserTask/model/HistoricUserTask';
import { HistoricTaskFilterCount, HistoricUserTaskFilter } from 'entityHistoricUserTask/model/HistoricUserTaskFilter';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class HistoricUserTaskService {
	private readonly url = `${environment.SERVER_URL}/history/user-task`;

	constructor(private http: HttpClient) {}

	public getHistoricTaskList(filter: HistoricUserTaskFilter = {}): Observable<HistoricUserTask[]> {
		return this.http.post<HistoricUserTask[]>(this.url, filter);
	}

	public countHistoricTasks(filter: HistoricTaskFilterCount = {}): Observable<number> {
		return this.http.post<number>(`${this.url}/count`, filter);
	}
}
