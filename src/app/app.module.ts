import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule} from './app-routing/app-routing.module'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';

import { UserService } from '../app/service/user.service';
import { TasksService } from '../app/service/tasks.service';
import { OffersService } from './service/offers.service';
import { AuthenticationInterceptor } from './security/authentication-interceptor';

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
    HttpClientModule
  ],
  providers: [
    UserService,
    TasksService,
    OffersService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthenticationInterceptor, 
      multi: true 
  } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
