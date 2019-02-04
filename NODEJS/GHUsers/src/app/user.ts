export class User {
  public showDescription:boolean;
  constructor(public id:number, public name:string,public description:string,public deleteDate:Date){
    this.showDescription=false
  }
}
