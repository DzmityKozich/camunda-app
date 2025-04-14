import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ProcessDefinition,
  ProcessDefinitionFilter,
} from '../model/ProcessDefinition';

@Injectable({
  providedIn: 'root',
})
export class ProcessDefinitionService {
  private readonly url = `${environment.SERVER_URL}/process-definition`;

  constructor(private http: HttpClient) {}

  public getProcessDefinitionList(): Observable<ProcessDefinition[]> {
    const filter: ProcessDefinitionFilter = {
      latestVersion: true,
      sortBy: 'key',
      sortOrder: 'asc',
    };
    return this.http.post<ProcessDefinition[]>(this.url, filter);
  }

  public getProcessDefinitionsByKey(
    key: string
  ): Observable<ProcessDefinition[]> {
    return this.http.post<ProcessDefinition[]>(`${this.url}/versions`, { key });
  }
}
