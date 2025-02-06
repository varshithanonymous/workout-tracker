import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent {
  @Input() userData: any[] = [];

  workouts: any[] = [];

  ngOnInit() {
    // You can initialize the workouts array here if needed
    this.workouts = this.userData;
  }

  addWorkout(workout: any) {
    // Add new workout to the respective user
    this.workouts.push(workout);
  }
}
