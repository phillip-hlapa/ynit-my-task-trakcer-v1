import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss'],
})
export class CreatetaskComponent implements OnInit {

  constructor() { }


  folder = ''

  ngOnInit() {

    this.folder = 'Create Task'

  }

}
