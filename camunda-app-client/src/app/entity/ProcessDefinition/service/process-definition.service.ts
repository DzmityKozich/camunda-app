import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
    return this.http.post<ProcessDefinition[]>(`${this.url}`, {
      key,
      sortBy: 'version',
      sortOrder: 'desc',
    });
  }

  public getProcessDefinitionDiagram(id: string): Observable<string> {
    return this.http
      .get<{ bpmn20Xml: string }>(`${this.url}/${id}/xml`)
      .pipe(map(({ bpmn20Xml }) => bpmn20Xml));
  }
}
