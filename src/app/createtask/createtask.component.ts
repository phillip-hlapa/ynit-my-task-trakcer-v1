import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/tasks-service/task.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss'],
})
export class CreatetaskComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  taskObj:any = {
    taskName: '',
    taskDescription: '',
    taskProgress: 0,
    taskStartDate: '',
    taskEndDate: '',
    taskBelongsTo: sessionStorage.getItem('userId'),
    taskProgressStatus: ''
  }

  createTaskErrorMessage = 'error creating task'
  createTaskError = false

  // "taskName": "SOME TASK",
  // "tastDescription": "SOME DESC",
  // "taskProgress": 90,
  // "taskStartDate": "2010/12/29",
  // "taskBelongsTo": "630dce001e2456cc5ae05e79"

  folder = ''
  public visible_spinner = false;
  ngOnInit() {

    this.folder = 'Create Task'
    this.visible_spinner = false;

  }

  createTask() {
    console.log('creating task')
    this.visible_spinner = true
    setTimeout(() => {
      this.taskService.createTask(this.taskObj).subscribe(success => {
        console.log(success)
        if(success) {
          this.router.navigate(['tasksapp/tasks'])
          this.visible_spinner = false
        } else {
          this.visible_spinner = true
          this.createTaskError = true
        }
      }, error => {
        this.visible_spinner = false
        this.createTaskError = true
        console.log(error);
      })
    }, 2000);

  }

}
