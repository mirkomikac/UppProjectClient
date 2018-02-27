import { Injectable } from '@angular/core';
import { User } from '../shared/User';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http : HttpClient) { }

  login(user : User) : Promise<User>{
    return this.http.post<User>("/api/users/login", user).toPromise().catch(this.handleError);
  }

  logout(){
    this.http.get("/api/users/logout").toPromise().catch(this.handleError);
  }

  startRegisterProcess(){
    return this.http.get("/api/users/register").toPromise();
  }

  stopRegisterProcess(processInstanceId : string){
    return this.http.get("/api/users/registerStop?processInstanceId=" + processInstanceId).toPromise();
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }

}
