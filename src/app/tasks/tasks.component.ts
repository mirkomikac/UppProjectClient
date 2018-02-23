import { Component, OnInit } from '@angular/core';
import { TasksService } from '../service/tasks.service';
import { UserTask } from '../shared/UserTask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private userTasks: UserTask[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getUserTasks().then(ut => this.userTasks = ut);
  }

}
