import { TestBed } from '@angular/core/testing';

import { HistoricProcessInstanceApiService } from './historic-process-instance-api.service';

describe('HistoricProcessInstanceApiService', () => {
  let service: HistoricProcessInstanceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricProcessInstanceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
