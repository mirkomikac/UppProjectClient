import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserTask } from '../shared/UserTask';

@Injectable()
export class TasksService {

  constructor(private http: Http) { }

  getUserTasks(): Promise<UserTask[]>{
    return this.http.get("/api/tasks").toPromise().then(response => response.json() as UserTask[]).catch(this.handleError);
  }

  completeTask(userTask: UserTask){
    return this.http.post("/api/tasks", userTask).toPromise();
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }

}
