import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `


  <div class ="container">
    <div class ="jumbotron">
      <h1>Meal Tracker</h1>
    </div>
    <div class="row">
      <meal-list [childMealList]="masterMeal"
      (clickSender) = "showDetails($event)"></meal-list>
    </div>
    <div class="row">
      <div class ="col-sm-6">
        <new-meal (newMealSender) = "addMeal($event)"></new-meal>
      </div>
      <div class="col-sm-6">
        <edit-meal [childChosenMeal] = "selectedMeal"(doneClickSender) = "finishedEdit()"></edit-meal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterMeal: Meal[] = [
    new Meal('Sushi', "A roll and a couple pieces of ngiri for dinner", 500),
    new Meal('Pizza', "two slices for lunch", 570),
    new Meal('Cereal', "a bowl with almond milk for breakfast", 130)
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEdit() {
    this.selectedMeal = null;
  }

  addMeal (newMeal: Meal){
    this.masterMeal.push(newMeal);
  }
}
