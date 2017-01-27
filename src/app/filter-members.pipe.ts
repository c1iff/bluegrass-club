import { Pipe, PipeTransform } from '@angular/core';
import {Member} from './member.model';

@Pipe({
  name: 'filterMembers',
  pure: false
})
export class FilterMembersPipe implements PipeTransform {

  transform(input: Member[], location) {
    var output: Member[] =[];
    if(input !== null) {
      if(location === "all") {
        return input;
      } else  {
        for(var i = 0; i<input.length - 1; i++) {
          if (input[i].location === location) {
            output.push(input[i])
          }
        }
        return output
      }
    } else {
      return input;
    }
  }

}
