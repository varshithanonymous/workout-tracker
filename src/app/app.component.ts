import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    }
  ];

  // Initialize newWorkout object with a default number value for minutes
  newWorkout = {
    name: '',
    type: '',
    minutes: 0  // Set a default number value instead of null
  };

  onWorkoutAdded() {
    // Find if the user already exists
    const user = this.userData.find(user => user.name === this.newWorkout.name);
    
    if (user) {
      // If user exists, add the new workout to their list
      user.workouts.push({ type: this.newWorkout.type, minutes: this.newWorkout.minutes });
    } else {
      // If user doesn't exist, create a new user and add the workout
      const newUserId = this.userData.length + 1;
      this.userData.push({
        id: newUserId,
        name: this.newWorkout.name,
        workouts: [{ type: this.newWorkout.type, minutes: this.newWorkout.minutes }]
      });
    }

    // Clear the form after adding the workout
    this.newWorkout = { name: '', type: '', minutes: 0 };  // Reset minutes to 0
  }
}
