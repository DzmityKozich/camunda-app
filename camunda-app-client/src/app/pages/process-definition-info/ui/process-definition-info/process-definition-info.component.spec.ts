import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDefinitionInfoComponent } from './process-definition-info.component';

describe('ProcessDefinitionInfoComponent', () => {
  let component: ProcessDefinitionInfoComponent;
  let fixture: ComponentFixture<ProcessDefinitionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessDefinitionInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessDefinitionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
