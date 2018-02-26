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

  private userTasks: UserTask[];


  constructor(private tasksService: TasksService, private offersService: OffersService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.tasksService.getUserTasks().then(ut => this.userTasks = ut);
  }

  startAuction() {
    this.offersService.startAuction();
    this.tasksService.getUserTasks().then(ut => this.userTasks = ut);
  }

  completeTask(index: number) {
    console.log(this.userTasks[index])
    this.tasksService.completeTask(this.userTasks[index]).then(response => {
      this.userTasks.splice(0, this.userTasks.length);
      this.tasksService.getUserTasks().then(tasks => this.userTasks = tasks);
    });
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
