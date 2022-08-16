import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/tasksapp/home', icon: 'home'},
    { title: 'Login', url: '/tasksapp/login', icon: 'finger-print'},
    { title: 'Register', url: '/tasksapp/register', icon: 'create' },
    { title: 'View Tasks', url: '/tasksapp/tasks', icon: 'book' },
    { title: 'Create Task', url: '/tasksapp/createtask', icon: 'bookmark' },
    { title: 'Tasks Progress', url: '/tasksapp/tasksprogress', icon: 'podium' },
    { title: 'Tasks Management', url: '/tasksapp/tasksmanagement', icon: 'settings' },
    { title: 'Logout', url: '/tasksapp/logout', icon: 'exit' },
  ];
  public labels = ['Diepkloof Forum', 'Shop', 'YNIT Home', 'Contact', 'About'];
  public labels2 = [
    { title: 'Diepkloof Forum', url: ''},
    { title: 'Shop', url: ''},
    { title: 'YNIT Home', url: ''},
    { title: 'Contact', url: ''},
    { title: 'About', url: ''}
  ]
  constructor() {}
}
