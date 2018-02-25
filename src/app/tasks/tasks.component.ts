import { Component, OnInit } from '@angular/core';
import { TasksService } from '../service/tasks.service';
import { UserTask } from '../shared/UserTask';
import { OffersService } from '../service/offers.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private userTasks: UserTask[];

  constructor(private tasksService: TasksService, private offersService: OffersService) { }

  ngOnInit() {
    this.tasksService.getUserTasks().then(ut => this.userTasks = ut);
  }

  startAuction() {
    this.offersService.startAuction();
  }

  completeTask(index: number) {
    console.log(this.userTasks[index])
    this.tasksService.completeTask(this.userTasks[index]).then(response => {
      this.userTasks.splice(0, this.userTasks.length);
      this.tasksService.getUserTasks().then(tasks => this.userTasks = tasks);
    });
  }

}
