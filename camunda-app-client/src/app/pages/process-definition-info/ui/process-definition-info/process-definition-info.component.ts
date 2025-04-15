import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import {
  ProcessDefinition,
  ProcessDefinitionService,
} from 'entity/ProcessDefinition';
import { ProcessInstanceService } from 'entity/ProcessInstance';
import {
  BehaviorSubject,
  filter,
  forkJoin,
  mergeMap,
  Subscription,
} from 'rxjs';
import { ProcessDefinitionDataComponent } from '../process-definition-data/process-definition-data.component';
import { AsyncPipe } from '@angular/common';
import { BpmnModelerComponent } from 'feature/bpmn-modeler';

@Component({
  selector: 'cca-process-definition-info',
  imports: [ProcessDefinitionDataComponent, AsyncPipe, BpmnModelerComponent],
  templateUrl: './process-definition-info.component.html',
  styleUrl: './process-definition-info.component.scss',
})
export class ProcessDefinitionInfoComponent implements OnInit, OnDestroy {
  public processDefinitionKey = input.required<string>();

  protected processDefinitions = signal<ProcessDefinition[]>([]);
  protected selectedDefinition$ = new BehaviorSubject<string>('');
  protected diagram = signal<string>('');

  private processDefinitionService = inject(ProcessDefinitionService);
  private processInstanceService = inject(ProcessInstanceService);
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.getProcessDefinitions();
    this.listenProcessDefinitionIdChange();
  }

  private getProcessDefinitions() {
    this.subscriptions.push(
      this.processDefinitionService
        .getProcessDefinitionsByKey(this.processDefinitionKey())
        .subscribe((defs) => {
          this.processDefinitions.set(defs);
          defs.length > 0 && this.selectedDefinition$.next(defs[0].id);
        })
    );
  }

  private listenProcessDefinitionIdChange() {
    this.subscriptions.push(
      this.selectedDefinition$
        .pipe(
          filter((id) => !!id),
          mergeMap((id) => this.getProcessDefinitionData(id))
        )
        .subscribe(({ xml, processInstances }) => {
          this.diagram.set(xml);
          console.log({ xml, processInstances });
        })
    );
  }

  private getProcessDefinitionData(id: string) {
    return forkJoin({
      xml: this.processDefinitionService.getProcessDefinitionDiagram(id),
      processInstances: this.processInstanceService.getProcessInstanceList({
        processDefinitionId: id,
      }),
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
