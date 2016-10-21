import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template:`

  `
})

export class EditMealCOmponent {
  @Input() childChosenMeal: Meal;
  @Output() doneClickSender = new EventEmitter();
  doneClicked() {
    this.doneClickSender.emit();
  }
}
