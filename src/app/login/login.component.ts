import { Component, OnInit } from '@angular/core';

import { User } from "../../app/shared/User";
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = {
    username : "",
    password : ""
  };

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user);
  }

}
