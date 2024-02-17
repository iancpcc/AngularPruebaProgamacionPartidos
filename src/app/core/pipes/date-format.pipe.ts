import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string | Date) {

    const year  =  value.toString().substring(0,4);
    const month  =  value.toString().substring(4,6);
    const dia  =  value.toString().substring(6,8);
    const currentDate = month.concat('-',dia,'-', year)
    const date = new Date(currentDate)

    return date ;
  }

}
