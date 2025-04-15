import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import { ProcessDefinitionStatistics } from '../../model/ProcessDefinitionStatistics';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'cca-process-definition-statistics',
  imports: [],
  templateUrl: './process-definition-statistics.component.html',
  styleUrl: './process-definition-statistics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessDefinitionStatisticsComponent implements AfterViewInit {
  public statistics = input.required<ProcessDefinitionStatistics>();

  protected lifeChart =
    viewChild.required<ElementRef<HTMLCanvasElement>>('lifeChart');

  private chart!: Chart;

  ngAfterViewInit(): void {
    this.chart = new Chart(this.lifeChart().nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Active', 'Suspended', 'Completed'],
        datasets: [
          {
            label: '# of processes',
            data: [300, 500, 250],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
    });
  }
}
