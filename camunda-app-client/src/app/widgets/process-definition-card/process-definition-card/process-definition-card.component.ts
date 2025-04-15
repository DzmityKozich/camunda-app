import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProcessDefinition } from 'entityProcessDefinition';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'cca-process-definition-card',
  imports: [MatCardModule, RouterLink],
  templateUrl: './process-definition-card.component.html',
  styleUrl: './process-definition-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessDefinitionCardComponent {
  processDefinition = input.required<ProcessDefinition>();
}
