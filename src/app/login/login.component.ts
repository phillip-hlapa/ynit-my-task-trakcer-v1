import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsersService } from '../services/users-service/users.service';
import { Router }          from '@angular/router';
import { AuthGuard } from '../services/guard.guard';
import { AuthService } from '../services/auth-service/auth.service';
// import { UserLogin } from '../models/UserLogin'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private UserService: UsersService, private alertController: AlertController, private router: Router, private authGuard: AuthGuard, private authService: AuthService) { }

  public folder: string;
  // public userLogin: UserLogin;
  public email: string = ''
  public password: string = ''

  public loginError = ''
  public showLoginError = false;

  public visible_spinner = false

  ngOnInit() {
  
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.folder = 'Login'
    this.showLoginError = false
    this.visible_spinner =  false
    this.email = ''
    this.password = ''
    console.log('sign up things => ', this.folder)
  }

  login() {
    this.visible_spinner =  true
    console.log('and then?')
    setTimeout(() => {
      let login = {
        email: this.email,
        password: this.password
      }
      this.doLogin(login)
    }, 2000);
  }

  private doLogin(login: any) {
    console.log(login)
    this.showLoginError = false
    this.UserService.UserLogin(login).subscribe(response => {
      let result: any = response;
      if(result.message) {
        console.log(result)
        this.showLoginError = true
        this.visible_spinner =  false
        this.loginError = result.message + '!'
      } else {
        console.log('login successful')
        this.email = ''
        this.password = ''
        sessionStorage.setItem('userId', result.user._id)
        sessionStorage.setItem('username', result.user.username)
        console.log(response)
        this.visible_spinner =  false
        this.router.navigate(['tasksapp/home'])
      }
    }, err => {
      console.log(err)
    })
  }


}
