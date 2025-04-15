import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import Modeler from 'bpmn-js/lib/NavigatedViewer';

@Component({
  selector: 'cca-bpmn-modeler',
  imports: [],
  templateUrl: './bpmn-modeler.component.html',
  styleUrl: './bpmn-modeler.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BpmnModelerComponent implements AfterViewInit {
  public xml = input.required<string>();

  protected canvas =
    viewChild.required<ElementRef<HTMLDivElement>>('bpmnCanvas');

  private bpmnModeler!: Modeler;

  constructor() {
    effect(() => {
      const shouldImport = this.xml() && this.canvas() && this.bpmnModeler;
      if (shouldImport) {
        this.bpmnModeler.importXML(this.xml()).then(() => {
          this.bpmnModeler.get<any>('canvas').zoom('fit-viewport');
        });
      }
    });
  }

  ngAfterViewInit(): void {
    this.bpmnModeler = new Modeler({
      container: this.canvas().nativeElement,
      height: '100%',
      width: '100%',
    });
  }
}
