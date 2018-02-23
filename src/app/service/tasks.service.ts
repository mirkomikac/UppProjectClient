import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserTask } from '../shared/UserTask';

@Injectable()
export class TasksService {

  constructor(private http: Http) { }

  getUserTasks(){
    return this.http.get("/api/tasks").toPromise().then(response => response.json() as UserTask[]);
  }

  completeTask(userTask: UserTask){
    return this.http.post("/api/tasks", userTask).toPromise();
  }

}
