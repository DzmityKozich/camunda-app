import { TestBed } from '@angular/core/testing';

import { HistoricUserTaskService } from './historic-user-task.service';

describe('HistoricUserTaskService', () => {
  let service: HistoricUserTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricUserTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
