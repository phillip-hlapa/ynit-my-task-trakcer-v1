import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasksprogress',
  templateUrl: './tasksprogress.component.html',
  styleUrls: ['./tasksprogress.component.scss'],
})
export class TasksprogressComponent implements OnInit {

  constructor() { }


  folder = ''

  ngOnInit() {

    this.folder = 'Tasks Progress'

  }

}
