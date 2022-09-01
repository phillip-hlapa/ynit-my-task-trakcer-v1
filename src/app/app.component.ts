import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersService } from './services/users-service/users.service';
import { Router }  from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


 
  constructor(public usersService: UsersService, private router: Router) {}

  isLoggedIn = new BehaviorSubject<boolean>(this.usersService.isAuthenticated());
  ngOnInit() {
    this.isLoggedIn.next(this.usersService.isAuthenticated());
  }
  public appPages = [
    { title: 'Home', url: '/tasksapp/home', icon: 'home', hidden: this.isLoggedIn.value},
    { title: 'Login', url: '/tasksapp/login', icon: 'finger-print', hidden: !this.isLoggedIn.value},
    { title: 'Register', url: '/tasksapp/register', icon: 'create', hidden: !this.isLoggedIn.value},
    { title: 'View Tasks', url: '/tasksapp/tasks', icon: 'book', hidden: this.isLoggedIn.value},
    { title: 'Create Task', url: '/tasksapp/createtask', icon: 'bookmark', hidden: this.isLoggedIn.value},
    { title: 'Tasks Progress', url: '/tasksapp/tasksprogress', icon: 'podium', hidden: this.isLoggedIn.value},
    { title: 'Tasks Management', url: '/tasksapp/tasksmanagement', icon: 'settings', hidden: this.isLoggedIn.value}
    // { title: 'Logout', url: '/tasksapp/logout', icon: 'exit', hidden: this.isLoggedIn.value},
  ];
  public labels = ['Diepkloof Forum', 'Shop', 'YNIT Home', 'Contact', 'About'];
  public labels2 = [
    { title: 'Diepkloof Forum', url: ''},
    { title: 'Shop', url: ''},
    { title: 'YNIT Home', url: ''},
    { title: 'Contact', url: ''},
    { title: 'About', url: ''}
  ]

  logout() {
    sessionStorage.clear();
    console.log('cleared sessionStorage, navigating to login');
    this.router.navigate(['tasksapp/login'])
  }
}
