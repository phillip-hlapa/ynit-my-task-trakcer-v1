import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users-service/users.service';
// import { UserLogin } from '../models/UserLogin'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  
  constructor(private activatedRoute: ActivatedRoute, private UserService: UsersService) { }

  public folder: string;
  // public userLogin: UserLogin;
  public email: string = ''
  public password: string = ''

  ngOnInit() {
  
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.folder = 'Login'
    console.log('sign up things => ', this.folder)
  }

  login() {
    let login = {
      email: this.email,
      password: this.password
    }
    this.doLogin(login)
  }

  private doLogin(login: any) {
    console.log('clicking at: ' + Date.now())
    this.UserService.UserLogin(login).subscribe(user => {
      console.log(user)
    }, err => {
      console.log(err)
    })
  }
}
