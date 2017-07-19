import { Component, OnInit } from '@angular/core';
import {User} from "./../user"
import {UserService} from "./../user.service"

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  user_list: Array<User>

  constructor(private user_service: UserService) { }

  ngOnInit() {
    this.user_list = [ 
      {name:"Lola",_id:1,createdAt : new Date() , updatedAt: new Date()},
      {name:"ola",_id:1,createdAt : new Date() , updatedAt: new Date()},
    ]
  }

}
