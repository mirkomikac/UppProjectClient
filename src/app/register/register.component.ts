import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, HostListener } from '@angular/core';

import { User } from '../shared/User';
import { UserService } from '../service/user.service';

import { Router } from '@angular/router';
import { UserTask } from '../shared/UserTask';
import { TaskProperty } from '../shared/TaskProperty';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  host: {'window:beforeunload':'destroyRegisterTask', 'window:onunload':'destroyRegisterTask'}
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerModal') public registerModal;

  objectKeys = Object.keys;

  private processId : string;

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
  private enumValues: string[];

  started: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getLoggedUser().then(data => {
      if(data != null){
        this.router.navigate(['/tasks']);
      } else {
        this.startProcess();
      }
    }).catch(this.handleError);
    
  }

  public startProcess(){
    this.userService.startRegisterProcess().then(data => { this.userService.getUserTasks().then(data => { this.userTasks = data, this.processId = data[0].processInstanceId }).catch(this.handleError); });
    this.started = true;
  }

  @HostListener('window:beforeunload')
  @HostListener('window:unload')
  destroyRegisterTask() {
    this.userService.stopRegisterProcess(this.userTasks[0].processInstanceId);
  }

  completeRegisterProcess(){
    for (let prop of this.userTasks[0].properties) {
      if(prop.type == 'enum'){
        Object.keys(prop.values).forEach((key: string) => {
          if(prop.values[key] == prop.value){
            prop.value = key;
          }
      });
      }
    }
    this.userService.completeTask(this.userTasks[0]).then(data => { console.log('Uspesno izvrsena registracija!'); alert('Uspesno izvrsena registracija'); });
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }
}
