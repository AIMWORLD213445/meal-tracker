import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template:`
  <h2> Enter a new meal</h2>
  <div class="form-group">
    <label> Enter meal name</label>
    <input class="form-control" #newName>
  </div>
  <div>
    <label> Enter meal details</label>
    <input class="form-control" #newDetails>
  </div>
  <div>
    <label> Enter meal calorie count</label>
    <input class="form-control"  #newCalories>
  </div>

  <button class = "btn btn-success submit-button" (click) = "addClicked(newName.value, newDetails.value,  newCalories.value)">Add Meal</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
