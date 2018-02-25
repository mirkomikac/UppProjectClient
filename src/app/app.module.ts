import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule} from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';

import { UserService } from '../app/service/user.service';
import { TasksService } from '../app/service/tasks.service';
import { OffersService } from './service/offers.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [
    UserService,
    TasksService,
    OffersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
