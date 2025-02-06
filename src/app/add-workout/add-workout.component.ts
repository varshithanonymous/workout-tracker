import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent {
  @Output() workoutAdded = new EventEmitter<any>();

  workoutName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  addWorkout() {
    const newWorkout = {
      name: this.workoutName,
      type: this.workoutType,
      minutes: this.workoutMinutes
    };

    this.workoutAdded.emit(newWorkout);  // Emit the new workout data to the parent
  }
}
