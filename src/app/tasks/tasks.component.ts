import { Component, OnInit } from '@angular/core';
import { TasksService } from '../service/tasks.service';
import { UserTask } from '../shared/UserTask';
import { OffersService } from '../service/offers.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private userTasks: UserTask[] = new Array();
  private selectedTask:UserTask = null;

  constructor(private tasksService: TasksService, private offersService: OffersService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.tasksService.getUserTasks().then(ut => {
      if(ut !== null) {
        this.userTasks = ut;
      }
    });
  }

  startAuction() {
    this.offersService.startAuction().then(()=>{
      this.checkForNewTasks();
    });
  }

  completeTask() {
    this.tasksService.completeTask(this.selectedTask).then(response => {
      this.checkForNewTasks();
    });
    this.userTasks.splice(this.userTasks.indexOf(this.selectedTask), 1);
    this.selectedTask = null;
  }

  setSelectedTask(userTask: UserTask) {
    this.selectedTask = userTask;
  }

  getCreationTime(creationTime: number) {
    let date: Date = new Date(creationTime);
    return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + '. ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }

  checkForNewTasks() {
    this.tasksService.getUserTasks().then((newUserTasks) => {
      newUserTasks.forEach((newUserTask) => {
        if(!this.doesTaskExist(newUserTask.id)){
          this.userTasks.push(newUserTask);
        }
      });
    })
  }

  doesTaskExist(newUserTaskId: string): boolean {
    for(let i = 0; i < this.userTasks.length; i++){
      let userTask: UserTask = this.userTasks[i];
      if(userTask.id === newUserTaskId) {
        return true;
      }
    }
    return false;
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
