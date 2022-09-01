import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks-service/task.service';

@Component({
  selector: 'app-tasksview',
  templateUrl: './tasksview.component.html',
  styleUrls: ['./tasksview.component.scss'],
})
export class TasksviewComponent implements OnInit {
  showNoTaskErrorMessage = '';
  showNoTaskError = false;

  constructor(private taskService: TaskService) { }

  folder = ''
  tasks: any
  c = "success";
  ngOnInit() {
    this.showNoTaskErrorMessage = '';
    this.showNoTaskError = false;
  
    this.taskService.getUserTasks().subscribe(success => {
      if(success) {
        this.tasks = success;
        console.log(this.tasks);
        if(this.tasks.length > 0) {
          for (var i = 0; i < this.tasks.length; i++) { 
            if(this.tasks[i].taskProgress < 40) {
              console.log('danger')
              this.tasks[i].taskProgressStatus = 'danger'
            }
            if(this.tasks[i].taskProgress >= 40 && this.tasks[i].taskProgress < 60) {
              console.log('warning')
              this.tasks[i].taskProgressStatus = 'warning'
            }
            if(this.tasks[i].taskProgress >= 60 && this.tasks[i].taskProgress < 75) {
              console.log('primary')
              this.tasks[i].taskProgressStatus = 'primary'
            } 
            if(this.tasks[i].taskProgress >= 75) {
              console.log('success')
              this.tasks[i].taskProgressStatus = 'success'
            }
            console.log('==> ', this.tasks[i].taskProgressStatus)
          }
        } else {
          this.showNoTaskError = true;
          this.showNoTaskErrorMessage = 'you have no tasks available, please create tasks first'
        }


      }
    }, error => {
      this.tasks = [
        {name: 'Coding', description: 'write an application that will help the community and myself', progress: 80, startDate: Date(), endDate: Date(), progressStatus: '', id: 1},
        {name: 'Gym', description: 'go back to the gym. Attend 4 times a week and stay healthy', progress: 57, startDate: Date(), endDate: Date(), progressStatus: '', id: 2},
        {name: 'Dating', description: 'start dating and take care of my girl', progress: 14, startDate: Date(), endDate: Date(), progressStatus: '', id: 3},
        {name: 'Work', description: 'look into forms loading', progress: 75, startDate: Date(), endDate: Date(), progressStatus: '', id: 4}
      ]
      console.log(error)
  })


    this.folder = 'View Tasks'
  }

}
