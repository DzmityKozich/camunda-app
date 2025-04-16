import { Component, inject, OnInit, signal, effect } from '@angular/core';
import { ProcessDefinition } from 'entity/ProcessDefinition';
import { MatDividerModule } from '@angular/material/divider';
import { ProcessDefinitionCardComponent } from 'widgets/process-definition-card';
import { ProcessDefinitionListStore } from '../../store/process-deinition-list.store';

@Component({
  selector: 'cca-process-definition-list',
  imports: [MatDividerModule, ProcessDefinitionCardComponent],
  templateUrl: './process-definition-list.component.html',
  styleUrl: './process-definition-list.component.scss',
})
export class ProcessDefinitionListComponent implements OnInit {
  protected processDefinitions = signal<ProcessDefinition[]>([]);
  protected processDefStore = inject(ProcessDefinitionListStore);

  constructor() {
    effect(() => {
      console.log(this.processDefStore.list());
    });
  }

  ngOnInit(): void {
    this.processDefStore.loadProcessDefinitionList();
  }
}
