import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Result } from '../result';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent implements OnInit {
  @ViewChild('scatterplot') private plotRef;
  plot: Chart;
  @Input() private result: Result;

  constructor() {
  }

  ngOnInit() {
    this.plot = new Chart(this.plotRef.nativeElement, {
      type: 'scatter',
      data: {
        datasets: [{
          data: this.result.points,
          pointBackgroundColor: this.getPointsColors(),
        }]
      },
      options: {
        tooltips: {
          callbacks: {
            label: (tooltipItem) => this.result.titles[tooltipItem.index]
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
    return this.result.labels.map(label => colorOptions[label]);
  }

  // Generate color options for labels
  private generateRandomColors(): string[] {
    const res = [];
    for (let i = 0; i < new Set(this.result.labels).size; ++i) {
      res.push(this.getRandomColor());
    }
    return res;
  }

  // adapted from https://stackoverflow.com/questions/25594478/different-color-for-each-bar-in-a-bar-chart-chartjs
  // Generate a single random color
  private getRandomColor(): string {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; ++i) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
