import { Component, OnInit } from '@angular/core';

import { User } from "../../app/shared/User";
import { UserService } from '../service/user.service';
import { userType } from '../shared/UserType';
import { Router } from "@angular/router";

import { RegisterComponent } from '../register/register.component';


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

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.userService.getLoggedUser().then(data => {
      if(data != null){
        this.router.navigate(['/tasks']);
      }
    }).catch(this.handleError);
  }

  login() {
     this.userService.login(this.user).then(data => {
        if(data != null){
          if(data.username != null && data.username != "")
          this.router.navigate(['/tasks']);
        } 
        else {
          alert('Unauthenticated');
        }
     }).catch(data => {
        alert('Unauthenticated');
     })
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }
}
