import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private storageKey = 'workouts';

  constructor() {}

  // Get all stored workouts
  getWorkouts() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Add a new workout
  addWorkout(name: string, type: string, minutes: number) {
    const workouts = this.getWorkouts();
    const user = workouts.find((user: any) => user.name === name);

    if (user) {
      user.workouts.push({ type, minutes });
    } else {
      workouts.push({ id: Date.now(), name, workouts: [{ type, minutes }] });
    }

    localStorage.setItem(this.storageKey, JSON.stringify(workouts));
  }

  // Filter workouts by name
  filterByName(name: string) {
    return this.getWorkouts().filter((user: any) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Filter by workout type
  filterByWorkoutType(type: string) {
    return this.getWorkouts().map((user: any) => ({
      ...user,
      workouts: user.workouts.filter((workout: any) => workout.type === type)
    }));
  }
}
