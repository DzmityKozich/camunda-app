import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricProcessInstance } from '../model/HistoricProcessInstance';
import { environment } from 'src/environments/environment';
import { ProcessInstanceHistoryFilter } from '../model/HistoricProcessInstanceFilter';

@Injectable({
  providedIn: 'root',
})
export class HistoricProcessInstanceApiService {
  private readonly url = `${environment.SERVER_URL}/history/process-instance`;

  constructor(private http: HttpClient) {}

  public getProcessInstanceHistoryList(
    filter: ProcessInstanceHistoryFilter
  ): Observable<HistoricProcessInstance[]> {
    return this.http.post<HistoricProcessInstance[]>(this.url, filter);
  }

  public getStatistics(): Observable<any> {
    return this.http.get<any>(`${this.url}/statistics`);
  }
}
