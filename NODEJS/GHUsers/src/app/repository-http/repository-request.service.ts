import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Repository} from '../repository';

@Injectable()
export class RepositoryRequestService {

  repository:Repository;
  constructor(private http:HttpClient) {
    this.repository=new Repository('','');
  }
  repositoryRequest(){

   // interface ApiResponse{
   //     name:string;
   //     description:string
   //
   // }
   // let promise =new Promise((resolve,reject)=>{
   //     this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
   //
   //         this.repository.name=response.name
   //         this.repository.description=response.description
   //
   //         resolve()
   //     },
   //     error=>{
   //             this.repository.name=" "
   //             this.repository.description=" "
   //             reject(error)
   //         }
   //     )
   // })
   //
   // return promise
 }
}
