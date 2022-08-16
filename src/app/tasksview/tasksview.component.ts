import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasksview',
  templateUrl: './tasksview.component.html',
  styleUrls: ['./tasksview.component.scss'],
})
export class TasksviewComponent implements OnInit {

  constructor() { }

  folder = ''
  tasks: any
  c = "success";
  ngOnInit() {

    this.tasks = [
      {name: 'Coding', description: 'write an application that will help the community and myself', progress: 80, startDate: Date(), endDate: Date(), progressStatus: '', id: 1},
      {name: 'Gym', description: 'go back to the gym. Attend 4 times a week and stay healthy', progress: 57, startDate: Date(), endDate: Date(), progressStatus: '', id: 2},
      {name: 'Dating', description: 'start dating and take care of my girl', progress: 14, startDate: Date(), endDate: Date(), progressStatus: '', id: 3},
      {name: 'Work', description: 'look into forms loading', progress: 75, startDate: Date(), endDate: Date(), progressStatus: '', id: 4}
    ]

   for (var i = 0; i < this.tasks.length; i++) { 
      if(this.tasks[i].progress < 40) {
        console.log('danger')
        this.tasks[i].progressStatus = 'danger'
      }
      if(this.tasks[i].progress >= 40 && this.tasks[i].progress < 60) {
        console.log('warning')
        this.tasks[i].progressStatus = 'warning'
      }
      if(this.tasks[i].progress >= 60 && this.tasks[i].progress < 75) {
        console.log('primary')
        this.tasks[i].progressStatus = 'primary'
      } 
      if(this.tasks[i].progress >= 75) {
        console.log('success')
        this.tasks[i].progressStatus = 'success'
      }
      console.log('==> ', this.tasks[i].progressStatus)

    }
    this.folder = 'View Tasks'
  }

}
