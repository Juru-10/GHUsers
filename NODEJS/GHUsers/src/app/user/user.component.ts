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
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
