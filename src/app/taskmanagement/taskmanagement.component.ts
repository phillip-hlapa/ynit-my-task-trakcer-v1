import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrls: ['./taskmanagement.component.scss'],
})
export class TaskmanagementComponent implements OnInit {

  constructor() { }

  folder = ''

  ngOnInit() {

    this.folder = 'Task Management'

  }

}
