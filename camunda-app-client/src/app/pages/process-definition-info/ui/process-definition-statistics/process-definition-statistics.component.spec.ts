import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDefinitionStatisticsComponent } from './process-definition-statistics.component';

describe('ProcessDefinitionStatisticsComponent', () => {
  let component: ProcessDefinitionStatisticsComponent;
  let fixture: ComponentFixture<ProcessDefinitionStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessDefinitionStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessDefinitionStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
