import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDefinitionCardComponent } from './process-definition-card.component';

describe('ProcessDefinitionCardComponent', () => {
  let component: ProcessDefinitionCardComponent;
  let fixture: ComponentFixture<ProcessDefinitionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessDefinitionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessDefinitionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
