import { Component, OnInit } from '@angular/core';

import { User } from '../shared/User';
import { UserService } from '../service/user.service';
import { TasksService } from '../service/tasks.service';

import { Router } from '@angular/router';
import { UserTask } from '../shared/UserTask';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  objectKeys = Object.keys;

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

  private userTasks : UserTask[];

  started: boolean = false;

  constructor(private userService: UserService, private tasksService: TasksService, private router: Router) { }

  ngOnInit() {
    this.userService.startRegisterProcess().then(data => { this.tasksService.getUserTasks().then(data => { this.userTasks = data }).catch(this.handleError); });
    this.started = true;
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }

}
