import { Component, computed, input, output } from '@angular/core';
import { ProcessDefinition } from 'entityProcessDefinition';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'cca-process-definition-data',
  imports: [MatListModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './process-definition-data.component.html',
  styleUrl: './process-definition-data.component.scss',
})
export class ProcessDefinitionDataComponent {
  public processDefinitions = input.required<ProcessDefinition[]>();
  public selectedDefinition = input.required<string>();

  public versionSelect = output<string>();

  protected currentProcessDefinition = computed(() =>
    this.processDefinitions().find(
      (def) => def.id === this.selectedDefinition()
    )
  );

  protected selectVersion(event: string): void {
    this.versionSelect.emit(event);
  }
}
