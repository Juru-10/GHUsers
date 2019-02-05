import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user';

@Injectable()
export class UserRequestService {
  user:User;

  // private apiUrl:"https://api.github.com/users/"+this.username+"?access_token=c3c72c2dc8324f0aca213bb0d00b097e65544a67"

  private username:string;

  constructor(private http:HttpClient) {
    this.username='Juru-10';
    // this.user=new User('');
  }

  getProfInfo(){
    return this.http.get("https://api.github.com/users/"+this.username+"?access_token=c3c72c2dc8324f0aca213bb0d00b097e65544a67");
  }

  // userRequest(){

   // interface ApiResponse{
   //     login:string;
   //     // public_repos:any;
   //
   // }
//    let promise =new Promise((resolve,reject)=>{
//        this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
//
//            this.user.login=response.login
//            // this.user.public_repos=response.public_repos
//
//            resolve()
//        },
//        error=>{
//                this.user.login=" "
//                // this.user.public_repos=" "
//                reject(error)
//            }
//        )
//    })
//
//    return promise
//  }
}
