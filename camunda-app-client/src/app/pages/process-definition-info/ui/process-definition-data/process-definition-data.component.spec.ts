import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDefinitionDataComponent } from './process-definition-data.component';

describe('ProcessDefinitionDataComponent', () => {
  let component: ProcessDefinitionDataComponent;
  let fixture: ComponentFixture<ProcessDefinitionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessDefinitionDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessDefinitionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
