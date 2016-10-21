import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
    name: "calories",
    pure: false

})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], selection: string) {
    var output: Meal[] = [];
      if(selection === 'under-500') {
        for(var i = 0; i < input.length; i++){
          if(input[i].calories<500) {
            output.push(input[i]);
          }
        }
        return output;
      } else if(selection === 'over-500'){
          for(var i=0; i<input.length; i++){
            if(input[i].calories>=500){
              output.push(input[i]);
            }
          }
          return output;
      } else{
        return input;
      }
  }
}
