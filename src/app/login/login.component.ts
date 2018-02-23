import { Component, OnInit } from '@angular/core';

import { User } from "../../app/shared/User";
import { UserService } from '../service/user.service';
import { userType } from '../shared/UserType';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = {
    username : "",
    password : "",
    email: "",
    name: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    userType: 0
  };

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user);
  }

}
