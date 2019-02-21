import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Params } from '../params';
import { ResultService } from '../result.service';
import { Point } from '../point';
import { Result } from '../result';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {
  paramsList: Params[];
  selectedModel: string;
  selectedAlgo: string;
  @Output() private result = new EventEmitter<Result>();

  constructor(private resultService: ResultService) {
  }

  ngOnInit(): void {
    this.getParams();
  }

  private getParams(): void {
    this.resultService.getParams$()
      .subscribe(params => this.paramsList = params);
  }

  private getModels(): string[] {
    return this.paramsList
      .map(params => params.model.name);
  }

  private getAlgosByModel(model: string): string[] {
    return this.paramsList
      .filter(params => params.model.name === model)
      .map(params => params.algorithm.name);
  }

  private getAvailableParams(model: string, algo: string): Params[] {
    return this.paramsList
      .filter(params => params.model.name === model && params.algorithm.name === algo);
  }

  private getPoints(params: Params): void {
    this.resultService.getPointsByParams$(params)
      .subscribe(points => this.result.emit(points));
  }
}
