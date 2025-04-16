import { AfterViewInit, ChangeDetectionStrategy, Component, effect, ElementRef, input, OnDestroy, viewChild } from '@angular/core';
import { ProcessDefinitionStatistics } from '../../model/ProcessDefinitionStatistics';
import { Chart } from 'chart.js/auto';
import { SuccessRate } from 'entity/HistoricProcessInstance';

const CHART_COLORS = {
	green: 'rgb(99, 255, 99)',
	blue: 'rgb(54, 162, 235)',
	yellow: 'rgb(255, 205, 86)',
	red: 'rgb(255, 99, 132)',
};

@Component({
	selector: 'cca-process-definition-statistics',
	imports: [],
	templateUrl: './process-definition-statistics.component.html',
	styleUrl: './process-definition-statistics.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessDefinitionStatisticsComponent implements AfterViewInit {
	public lifeStatistics = input.required<ProcessDefinitionStatistics>();
	public successRateStatistics = input.required<SuccessRate>();

	protected lifeChart = viewChild.required<ElementRef<HTMLCanvasElement>>('lifeChart');
	protected successRate = viewChild.required<ElementRef<HTMLCanvasElement>>('successRate');

	private lifeStatChart!: Chart;
	private successRateChart!: Chart;

	constructor() {
		this.listenForStatisticsChange();
	}

	private listenForStatisticsChange() {
		this.listenLifeStatisticsChange();
		this.listenForSuccessRateChange();
	}

	private listenLifeStatisticsChange(): void {
		effect(() => {
			const chartData = [...Object.values(this.lifeStatistics())];
			if (this.lifeStatChart) {
				this.lifeStatChart.data.datasets[0].data.splice(0, 3, ...chartData);
				this.lifeStatChart.update();
			}
		});
	}

	private listenForSuccessRateChange(): void {
		effect(() => {
			const stable = this.successRateStatistics().total - this.successRateStatistics().withIncidents;
			const chartData = [stable, this.successRateStatistics().withIncidents];
			if (this.successRateChart) {
				this.successRateChart.data.datasets[0].data = chartData;
				this.successRateChart.update();
			}
		});
	}

	ngAfterViewInit(): void {
		this.initCharts();
	}

	private initCharts(): void {
		this.initLifeStatisChart();
		this.initSuccessRateChart();
	}

	private initLifeStatisChart(): void {
		this.lifeStatChart = new Chart(this.lifeChart().nativeElement, {
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
						backgroundColor: [CHART_COLORS.green, CHART_COLORS.blue, CHART_COLORS.yellow],
					},
				],
			},
		});
	}

	private initSuccessRateChart(): void {
		this.successRateChart = new Chart(this.successRate().nativeElement, {
			type: 'doughnut',
			options: {
				responsive: true,
			},
			data: {
				labels: ['Active', 'With Incidents'],
				datasets: [
					{
						label: 'Amount of processes',
						data: [],
						backgroundColor: [CHART_COLORS.green, CHART_COLORS.red],
					},
				],
			},
		});
	}
}
