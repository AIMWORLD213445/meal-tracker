import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <h1>Meal Tracker</h1>
  `
})

export class AppComponent {
  public masterMeal: Meal[] = [
    new Meal('Pizza', "two slices for lunch", 570),
    new Meal('Sushi', "A roll and a couple pieces of ngiri for dinner", 500),
    new Meal('Cereal', "a bowl with almond milk for breakfast", 130)
  ]


}
