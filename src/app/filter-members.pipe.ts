import { Pipe, PipeTransform } from '@angular/core';
import {Member} from './member.model';

@Pipe({
  name: 'filterMembers',
  pure: false
})
export class FilterMembersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
