import {  Input } from '@angular/core';
import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
    selector: 'app-workout-chart',
    templateUrl: './workout-chart.component.html',
    styleUrls: ['./workout-chart.component.css'],
    standalone: false
})

@Component({
    selector: 'app-workout-chart',
    templateUrl: './workout-chart.component.html',
    styleUrls: ['./workout-chart.component.css'],
    standalone: false
})
export class WorkoutChartComponent {
  @Input() chartData: number[] = [];
  @Input() chartLabels: string[] = [];
}
