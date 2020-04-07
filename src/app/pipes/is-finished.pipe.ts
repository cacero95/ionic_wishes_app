import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/List_model';

@Pipe({
  name: 'isFinished',
  pure: false // for set the condition pure the pipe will pay attention to everycomponent
  // page, services or everyone on the app wooooooo!!!!
  // by default all the pipes are pures, so they only pay attention
  // in the components that was injected
})
export class IsFinishedPipe implements PipeTransform {

  transform(value: List[], finished:boolean): List[] {
    return value.filter((element)=>{
      return element.finished === finished
    });
  }

}
