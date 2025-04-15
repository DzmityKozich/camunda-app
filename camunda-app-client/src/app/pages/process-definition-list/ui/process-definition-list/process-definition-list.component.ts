import {
  Component,
  inject,
  OnInit,
  signal,
  effect,
  input,
} from '@angular/core';
import {
  ProcessDefinition,
  ProcessDefinitionService,
} from 'entity/ProcessDefinition';
import { Subscription } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';
import { ProcessDefinitionCardComponent } from 'widgets/process-definition-card';

@Component({
  selector: 'cca-process-definition-list',
  imports: [MatDividerModule, ProcessDefinitionCardComponent],
  templateUrl: './process-definition-list.component.html',
  styleUrl: './process-definition-list.component.scss',
})
export class ProcessDefinitionListComponent implements OnInit {
  // public processDefinitionKey = input<string | null>(null, { alias: 'key' });

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
    // this.fetchProcessDefinitions();
  }

  // private fetchProcessDefinitions(): void {
  //   if (this.processDefinitionKey()) {
  //     this.getProcessDefinitionsByKey();
  //   } else {
  //   }
  // }

  // private getProcessDefinitionsByKey(): void {
  //   this.sunbscribtions.push(
  //     this.processDefinitionService
  //       .getProcessDefinitionsByKey(this.processDefinitionKey()!)
  //       .subscribe((defs) => this.processDefinitions.set(defs))
  //   );
  // }

  private getProcessDefinitionList(): void {
    this.sunbscribtions.push(
      this.processDefinitionService
        .getProcessDefinitionList()
        .subscribe((defs) => this.processDefinitions.set(defs))
    );
  }
}
