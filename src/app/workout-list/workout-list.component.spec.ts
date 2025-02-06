import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-workout-list',
    templateUrl: './workout-list.component.html',
    styleUrls: ['./workout-list.component.css'],
    standalone: false
})
export class WorkoutListComponent {
  @Input() workouts: any[] = [];
}
