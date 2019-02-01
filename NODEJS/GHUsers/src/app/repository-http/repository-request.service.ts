import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user';


@Injectable()
export class RepositoryRequestService {

  user:User;
  constructor(private http:HttpClient) {
    this.repository=new Repository('','');
  }
}
