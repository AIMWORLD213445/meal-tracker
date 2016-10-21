import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template:`
    <div *ngIf="childChosenMeal">
     <h2>Edit Meal:</h2>
      <div class="form-group">
        <label>Edit Meal Name:</label>
        <input class="form-control" [(ngModel)]="childChosenMeal.name">
      </div>
      <div class="form-group">
        <label>Edit Meal Details:</label>
        <input class="form-control" [(ngModel)]="childChosenMeal.details">
      </div>
      <div class="form-group">
        <label>Edit Meal Calories:</label>
        <input class="form-control" [(ngModel)]="childChosenMeal.calories">
      </div>
      <button class="btn btn-info submit-button" (click)="doneClicked()">Done Editing</button>
    </div>
  `
})

export class MealEditComponent {
  @Input() childChosenMeal: Meal;
  @Output() doneClickSender = new EventEmitter();
  doneClicked() {
    this.doneClickSender.emit();
  }
}
