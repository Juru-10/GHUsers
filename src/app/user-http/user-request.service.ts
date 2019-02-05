import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user';

@Injectable()
export class UserRequestService {
  user:User;

  private username:string;

  constructor(private http:HttpClient) {
    this.username='';
    // this.user=new User('');
  }

  getProfInfo(){
    return this.http.get("https://api.github.com/users/"+this.username+"?access_token=dafcfb2bebf239c80358a6fd232a12745193706f");
  }

  getRepos(){
    return this.http.get("https://api.github.com/users/"+this.username+"/repos?access_token=dafcfb2bebf239c80358a6fd232a12745193706f");
  }

  getUser(username:string){
    this.username=username;
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
