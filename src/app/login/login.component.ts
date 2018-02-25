import { Component, OnInit, AfterViewInit, TemplateRef, ElementRef, ViewChildren, QueryList, OnChanges } from '@angular/core';

import { User } from "../../app/shared/User";
import { UserService } from '../service/user.service';
import { userType } from '../shared/UserType';
import { BsModalService, BsModalRef, ModalOptions} from 'ngx-bootstrap/modal';

import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChildren(RegisterComponent) registerComponents: QueryList<RegisterComponent>

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

  public modalRef : BsModalRef;
  
  public procesId : string;
  public registerModalShown = false;

  constructor(private userService : UserService, private modalService : BsModalService) { }

  public ngOnInit() { }

  public ngAfterViewInit(): void {
    /*
      this.registerComponents.changes.subscribe((comps: QueryList <RegisterComponent>) =>
      {
          this.modalRef = comps.first.registerModal;
      });*/
   }

  public ngOnChanges(){ }

  public login() {
    this.userService.login(this.user);
  }
  /*
  public register() {
    this.registerComponents.first.startProcess();
    this.modalRef  = this.modalService.show(this.registerComponents.first.registerModal);
    this.modalService.removeBackdrop;
    this.registerModalShown = true;
  }
  */

}
