import { Component, OnInit } from '@angular/core';

import { User } from '../shared/User';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  started: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.startRegisterProcess();
    //this.router.navigate(['/tasks']);
    this.started = true;
  }

}
