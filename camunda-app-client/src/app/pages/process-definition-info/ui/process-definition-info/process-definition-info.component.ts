import { Component, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { ProcessDefinition, ProcessDefinitionService } from 'entity/ProcessDefinition';
import { ProcessInstanceService } from 'entity/ProcessInstance';
import { BehaviorSubject, filter, forkJoin, mergeMap, Subscription } from 'rxjs';
import { ProcessDefinitionDataComponent } from '../process-definition-data/process-definition-data.component';
import { AsyncPipe } from '@angular/common';
import { BpmnModelerComponent } from 'feature/bpmn-modeler';
import { ProcessDefinitionStatisticsComponent } from '../process-definition-statistics/process-definition-statistics.component';
import { SuccessRate, StatisticsService, ProcessLifeStatistics, AvgTimeToCompleteStatistics } from 'entity/Statistics';
import { HistoricUserTaskService } from 'entityHistoricUserTask/api/historic-user-task.service';
import { getLastMonth } from '../../lib/utils';

@Component({
	selector: 'cca-process-definition-info',
	imports: [ProcessDefinitionDataComponent, AsyncPipe, BpmnModelerComponent, ProcessDefinitionStatisticsComponent],
	templateUrl: './process-definition-info.component.html',
	styleUrl: './process-definition-info.component.scss',
})
export class ProcessDefinitionInfoComponent implements OnInit, OnDestroy {
	public processDefinitionKey = input.required<string>();

	protected processDefinitions = signal<ProcessDefinition[]>([]);
	protected selectedDefinition$ = new BehaviorSubject<string>('');
	protected diagram = signal<string>('');
	protected successRateStatistics = signal<SuccessRate>({ total: 0, withIncidents: 0 });
	protected userTaskCount = signal<number>(0);
	protected avgTimeToComplete = signal<AvgTimeToCompleteStatistics[]>([]);
	protected statistics = signal<ProcessLifeStatistics>({
		active: 0,
		completed: 0,
		suspended: 0,
	});

	private processDefinitionService = inject(ProcessDefinitionService);
	private processInstanceService = inject(ProcessInstanceService);
	private staticsService = inject(StatisticsService);
	private historicUserTaskService = inject(HistoricUserTaskService);
	private subscriptions: Subscription[] = [];

	ngOnInit(): void {
		this.getProcessDefinitions();
		this.listenProcessDefinitionIdChange();
	}

	protected selectDefinition(id: string) {
		this.selectedDefinition$.next(id);
	}

	private getProcessDefinitions() {
		this.subscriptions.push(
			this.processDefinitionService.getProcessDefinitionsByKey(this.processDefinitionKey()).subscribe((defs) => {
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
				.subscribe(({ xml, processInstances, lifeStatistics, successRate, userTaskCount, avgTimeToComplete }) => {
					this.diagram.set(xml);
					this.statistics.set(lifeStatistics);
					this.successRateStatistics.set(successRate);
					this.userTaskCount.set(userTaskCount);
					this.avgTimeToComplete.set(avgTimeToComplete);
					console.log({ xml, processInstances, lifeStatistics, avgTimeToComplete });
				})
		);
	}

	private getProcessDefinitionData(id: string) {
		const filter = { processDefinitionId: id };
		const { monthAgo, today } = getLastMonth();
		return forkJoin({
			xml: this.processDefinitionService.getProcessDefinitionDiagram(id),
			processInstances: this.processInstanceService.getProcessInstanceList(filter),
			lifeStatistics: this.staticsService.getProcessLifeStatistics(id),
			successRate: this.staticsService.getSuccessRateStatistics(id),
			userTaskCount: this.historicUserTaskService.countHistoricTasks(filter),
			avgTimeToComplete: this.staticsService.getAverageTimeToComplete(id, monthAgo, today),
		});
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((sub) => sub.unsubscribe());
	}
}
