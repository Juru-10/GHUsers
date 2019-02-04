import { Component, OnInit } from '@angular/core';

import {User} from '../user';
import {Users} from '../users';
import {HttpClient} from '@angular/common/http';
import {Repository} from '../repository';
import {Router} from '@angular/router';
import {UserService} from '../users/user.service';
import {AlertsService} from '../alert-service/alerts.service';
import {RepositoryRequestService} from '../repository-http/repository-request.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserService,RepositoryRequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users=Users;
  alertService:AlertsService
  user:User;

  goToUrl(login){
    this.router.navigate(['/users',login])
  }

  addNewUser(user){
      let userLength=this.users.length;
      user.id=userLength+1;
      user.deleteDate=new Date(user.deleteDate)
      this.users.push(user)
  }

  constructor(userService:UserService,alertService:AlertsService,private repositoryService:RepositoryRequestService,private router:Router) {
    this.users = userService.getUsers();
    this.alertService = alertService;
  }

  ngOnInit() {
    // this.repositoryService.repositoryRequest()
    // this.repository=this.repositoryService.repository
  }

}
