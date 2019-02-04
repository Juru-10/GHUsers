import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {User} from '../user'
import { ActivatedRoute, ParamMap } from '@angular/router';
import {UserService} from '../users/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers:[UserService]
})
export class UserDetailsComponent implements OnInit {

  @Input() user:User;
  @Output() isDelete = new EventEmitter<boolean>();

  userDelete(deleteU:boolean){
    this.isDelete.emit(deleteU);
  }
  constructor(private route:ActivatedRoute,private service:UserService) { }

  ngOnInit() {
    let username = this.route.snapshot.paramMap.get('login');
    this.user=this.service.getUser(username)
  }
}
