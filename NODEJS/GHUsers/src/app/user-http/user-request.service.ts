import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user';

@Injectable()
export class UserRequestService {
  user:User;
  constructor(private http:HttpClient) {
    this.user=new User('','');
  }

  userRequest(){

   interface ApiResponse{
       login:string;
       public_repos:any;

   }
   let promise =new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{

           this.user.login=response.login
           this.user.public_repos=response.public_repos

           resolve()
       },
       error=>{
               this.user.name=" "
               this.user.public_repos=" "
               reject(error)
           }
       )
   })

   return promise
 }
}
