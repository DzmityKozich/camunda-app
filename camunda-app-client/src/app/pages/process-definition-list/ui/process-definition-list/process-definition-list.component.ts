import { Component, inject, OnInit, signal, effect } from '@angular/core';
import {
  ProcessDefinition,
  ProcessDefinitionService,
} from 'entity/ProcessDefinition';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cca-process-definition-list',
  imports: [],
  templateUrl: './process-definition-list.component.html',
  styleUrl: './process-definition-list.component.scss',
})
export class ProcessDefinitionListComponent implements OnInit {
  protected processDefinitions = signal<ProcessDefinition[]>([]);

  private processDefinitionService = inject(ProcessDefinitionService);
  private sunbscribtions: Subscription[] = [];

  constructor() {
    effect(() => {
      console.log(this.processDefinitions());
    });
  }

  ngOnInit(): void {
    this.getProcessDefinitionList();
  }

  private getProcessDefinitionList(): void {
    this.sunbscribtions.push(
      this.processDefinitionService
        .getProcessDefinitionList()
        .subscribe((defs) => this.processDefinitions.set(defs))
    );
  }
}
