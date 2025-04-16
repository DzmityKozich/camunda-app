import { Component, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { ProcessDefinition, ProcessDefinitionService } from 'entity/ProcessDefinition';
import { ProcessInstanceService } from 'entity/ProcessInstance';
import { BehaviorSubject, filter, forkJoin, mergeMap, Subscription } from 'rxjs';
import { ProcessDefinitionDataComponent } from '../process-definition-data/process-definition-data.component';
import { AsyncPipe } from '@angular/common';
import { BpmnModelerComponent } from 'feature/bpmn-modeler';
import { ProcessDefinitionStatistics } from '../../model/ProcessDefinitionStatistics';
import { ProcessDefinitionStatisticsComponent } from '../process-definition-statistics/process-definition-statistics.component';
import { StatisticsService } from 'entityHistoricProcessInstance/api/statistics.service';
import { SuccessRate } from 'entityHistoricProcessInstance';

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
	protected statistics = signal<ProcessDefinitionStatistics>({
		active: 0,
		completed: 0,
		suspended: 0,
	});

	private processDefinitionService = inject(ProcessDefinitionService);
	private processInstanceService = inject(ProcessInstanceService);
	private staticsService = inject(StatisticsService);
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
				.subscribe(({ xml, processInstances, lifeStatistics, successRate }) => {
					this.diagram.set(xml);
					this.statistics.set(lifeStatistics);
					this.successRateStatistics.set(successRate);
					console.log({ xml, processInstances, lifeStatistics, successRate });
				})
		);
	}

	private getProcessDefinitionData(id: string) {
		return forkJoin({
			xml: this.processDefinitionService.getProcessDefinitionDiagram(id),
			processInstances: this.processInstanceService.getProcessInstanceList({
				processDefinitionId: id,
			}),
			lifeStatistics: this.staticsService.getProcessLifeStatistics(id),
			successRate: this.staticsService.getSuccessRateStatistics(id),
		});
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((sub) => sub.unsubscribe());
	}
}
