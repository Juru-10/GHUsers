import { Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateCountPipe'
})

export class DateCountPipe implements PipeTransform {

  transform(value: any){
    var datePipe = new DatePipe("en-Rwanda");
    value = parseInt(datePipe.transform(value, 'yyyy,mm,dd'));

    let today:Date= new Date();
    let todayWithNoTime:any= new Date(today.getFullYear())
    var dateDifference= Math.abs(todayWithNoTime-value)

    if (dateDifference>=1&&todayWithNoTime>value){
      return dateDifference;
    }
    else{
      return 0;
    }

  }

}
