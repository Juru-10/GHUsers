import { Injectable } from '@angular/core';
import {Users} from "../users"

@Injectable()
export class UserService {
  getUsers(){
    return Users;
  }
  getUser(login){
    for (let user of Users){
        if (user.login == login){
            return user;
        }
    }
  }
}
