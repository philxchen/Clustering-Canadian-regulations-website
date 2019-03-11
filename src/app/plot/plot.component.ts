import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Result } from '../result';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html'
})
export class PlotComponent implements OnInit {
  @ViewChild('scatterplot') private plotRef;
  plot: Chart;
  private _result: Result;
  @Input() set result(value: Result) {
    // Update plot
    this._result = value;
    if (this.plot) {
      this.plot.data.datasets = [{
        data: value.points,
        pointBackgroundColor: this.getPointsColors()
      }];
      // @ts-ignore
      this.plot.options.tooltips.callbacks.label = (tooltipItem) => value.titles[tooltipItem.index];

      this.plot.update();
    }
  }

  constructor() {
  }

  // adapted from https://stackoverflow.com/questions/25594478/different-color-for-each-bar-in-a-bar-chart-chartjs
  // Generate a single random color
  private static getRandomColor(): string {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; ++i) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  ngOnInit(): void {
    this.plot = new Chart(this.plotRef.nativeElement, {
      type: 'scatter',
      data: {
        datasets: [{
          data: this._result.points,
          pointBackgroundColor: this.getPointsColors()
        }]
      },
      options: {
        tooltips: {
          callbacks: {
            label: (tooltipItem) => this._result.titles[tooltipItem.index]
          }
        },
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom'
          }]
        }
      }
    });
  }

  // Get color for each point from color options
  private getPointsColors(): string[] {
    const colorOptions = this.generateRandomColors();
    return this._result.labels.map(label => colorOptions[label]);
  }

  // Generate color options for labels
  private generateRandomColors(): string[] {
    const res = [];
    for (let i = 0; i < new Set(this._result.labels).size; ++i) {
      res.push(PlotComponent.getRandomColor());
    }
    return res;
  }
}
