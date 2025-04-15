import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessInstance } from 'entityProcessInstance/model/ProcessInsatnce';
import { ProcessInstanceFilter } from 'entityProcessInstance/model/ProcessInstanceFilter';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProcessInstanceService {
  private readonly url = `${environment.SERVER_URL}/process-instance`;

  constructor(private http: HttpClient) {}

  public getProcessInstanceList(
    filter: ProcessInstanceFilter = {}
  ): Observable<ProcessInstance[]> {
    return this.http.post<ProcessInstance[]>(this.url, filter);
  }
}
