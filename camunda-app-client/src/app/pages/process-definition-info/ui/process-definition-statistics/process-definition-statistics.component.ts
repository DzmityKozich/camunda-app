import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  OnDestroy,
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
export class ProcessDefinitionStatisticsComponent
  implements AfterViewInit, OnDestroy
{
  public statistics = input.required<ProcessDefinitionStatistics>();

  protected lifeChart =
    viewChild.required<ElementRef<HTMLCanvasElement>>('lifeChart');

  private chart!: Chart;

  private chartUpdateEffect = effect(() => {
    const chartData = [...Object.values(this.statistics())];
    if (this.chart) {
      this.chart.data.datasets[0].data.splice(0, 3, ...chartData);
      this.chart.update();
    }
  });

  ngAfterViewInit(): void {
    this.chart = new Chart(this.lifeChart().nativeElement, {
      type: 'doughnut',
      options: {
        responsive: true,
      },
      data: {
        labels: ['Active', 'Suspended', 'Completed'],
        datasets: [
          {
            label: 'Amount of processes',
            data: [],
            backgroundColor: [
              'rgb(99, 255, 99)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
    });
  }

  ngOnDestroy(): void {
    this.chartUpdateEffect.destroy();
  }
}
