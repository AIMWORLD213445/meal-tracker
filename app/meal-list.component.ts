import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
  <h3> List of Daily Meals</h3>
  <div *ngFor="let currentMeal of childMealList">
    <h3>{{ currentMeal.name }} </h3>
    <h4> Details: {{ currentMeal.details }} </h4>
    <h4>Calorie Count: {{ currentMeal.calories }} </h4>
    <button class="btn btn-success" (click) = "editButtonClicked(currentMeal)"> Edit Meal</button>
  </div>

  `
})

export class MealListComponent {
  public selectedCalories: string = "all";
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonClicked (mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  changeCalories(selection: string){
    this.selectedCalories = selection;
  }

  getBackgroundColor(pickedMeal:Meal){
    if(pickedMeal.calories>=500){
      return "rgba(51, 153, 255, 0.7)";
    }else{
      return "rgba(255, 51, 0, 0.7)";
    }
  }
}
