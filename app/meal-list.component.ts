import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
  <h3> List of Daily Meals</h3>
  <div *ngFor="let currentMeal of childMealList">
    <h3>{{ currentMeal.name }} </h3>
    <h4>{{ currentMeal.details }} </h4>
    <h4>{{ currentMeal.calories }} </h4>
    <button class="btn btn-success" (click) = "editButtonClicked(currentMeal)"> Edit Meal</button>
  </div>

  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonClicked (mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
