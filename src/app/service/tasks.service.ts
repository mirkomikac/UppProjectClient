import { Injectable } from '@angular/core';
import { UserTask } from '../shared/UserTask';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) { }

  getUserTasks(): Promise<UserTask[]>{
    return this.http.get<UserTask[]>("/api/tasks").toPromise().catch(this.handleError);
  }

  completeTask(userTask: UserTask){
    return this.http.post("/api/tasks", userTask).toPromise();
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }

}
