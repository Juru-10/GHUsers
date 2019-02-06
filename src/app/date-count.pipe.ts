import { Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateCount'
})

export class DateCountPipe implements PipeTransform {

  transform(value: string){
    var datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, 'dd/MM/yyyy');
    return datePipe;
    // let today:Date= new Date();
    // let todayWithNoTime:any= new Date(today.getFullYear(),today.getMonth(),today.getDate())
    // var dateDifference= Math.abs(todayWithNoTime-value)
    // const secondsInADay= 86400;
    //
    // var dateDifferenceSeconds=dateDifference*0.001;
    //
    // var dateCounter = dateDifferenceSeconds/secondsInADay;
    //
    // if (dateCounter>=1&&todayWithNoTime>value){
    //   return dateCounter;
    // }else{
    //   return 0;
    // }

  }

}
