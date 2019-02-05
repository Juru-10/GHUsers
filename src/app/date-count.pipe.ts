import { Pipe, PipeTransform} from '@angular/core';
// import {UserComponent} from '../user.component';
@Pipe({
  name: 'dateCount'
})

export class DateCountPipe implements PipeTransform {
  // constructor(userRequestService:UserRequestService){
  //   this.userRequestService.getProfInfo().subscribe(created_at =>{console.log(created_at);
  //   this.profile.created_at=profile;});
  // }
  // profile:any;
  // // value=this.profile.;

  transform(value: any): number {
    let today:Date= new Date();
    let todayWithNoTime:any= new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference= Math.abs(todayWithNoTime-value)
    const secondsInADay= 86400;

    var dateDifferenceSeconds=dateDifference*0.001;

    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter>=1&&todayWithNoTime>value){
      return dateCounter;
    }else{
      return 0;
    }

  }

}
