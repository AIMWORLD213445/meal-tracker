import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
  <h3> List of Daily Meals</h3>
  <div *ngFor="let currentMeal of childMealList">
  </div>

  `
})

export class MealListComponent {

}
