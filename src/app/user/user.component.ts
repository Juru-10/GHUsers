import { Component, OnInit } from '@angular/core';

import {User} from '../user';
import {Users} from '../users';
import {HttpClient} from '@angular/common/http';
import {Repository} from '../repository';
import {Router} from '@angular/router';
import {UserService} from '../users/user.service';
import {AlertsService} from '../alert-service/alerts.service';
import {RepositoryRequestService} from '../repository-http/repository-request.service';
import {UserRequestService} from '../user-http/user-request.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserService,RepositoryRequestService,UserRequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // users=Users;
  // repository=Repository;
  // alertService:AlertsService;
  // user:User;
  //
  // goToUrl(id){
  //   this.router.navigate(['/users',id])
  // }
  //
  // addNewUser(user){
  //     // let userLength=this.users.length;
  //     // user.id=userLength+1;
  //     // user.deleteDate=new Date(user.deleteDate)
  //     this.users.push(user)
  //     // this.user.login;
  // }
  profile:any;
  repos:any;
  usernameText:string;

  constructor(private userRequestService:UserRequestService,userService:UserService,alertService:AlertsService,private repositoryService:RepositoryRequestService, private router:Router) {
    // this.users = userService.getUsers();
    // this.alertService = alertService;

  }
  findUser(){
    this.userRequestService.getUser(this.usernameText);
    this.userRequestService.getProfInfo().subscribe(profile =>{console.log(profile);
    this.profile=profile;
    });
    this.userRequestService.getRepos().subscribe(repos =>{console.log(repos);
    this.repos=repos;
    console.log(this.usernameText)
  });

  }
  ngOnInit() {

    // this.repositoryService.repositoryRequest()
    // this.repository=this.repositoryService.repository
  }

}
