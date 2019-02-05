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
  goToUrl(id){
          this.router.navigate(['/users',id])
      }

  profile:any;
  repos:any;
  usernameText:string;

  constructor(private userRequestService:UserRequestService,userService:UserService,alertService:AlertsService,private repositoryService:RepositoryRequestService, private router:Router) {

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

  }

}
