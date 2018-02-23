import { Injectable } from '@angular/core';
import { User } from '../shared/User';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http : Http) { }

  login(user : User){
    return this.http.post("/api/users/login", user).toPromise();
  }

}
