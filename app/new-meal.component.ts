import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template:`
  <form name="form">
  <h2> Enter a new meal:</h2>
  <div class="form-group">
    <label> Enter meal name:</label>
    <input  type="text" name="name" class="form-control" #newName >
  </div>
  <div>
    <label> Enter meal details:</label>
    <input   name="details" type="text" class="form-control" #newDetails >
  </div>
  <br>
  <div>
    <label> Enter meal calorie count:</label>
    <input  name="calories" type="number" class="form-control"  #newCalories >
  </div>
  <button type="submit" class = "btn btn-success submit-button" (click) = "
    addClicked(newName.value, newDetails.value,  newCalories.value);
    newName.value='';
    newDetails.value='';
    newCalories.value='';
    ">Add Meal</button>
</form>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
