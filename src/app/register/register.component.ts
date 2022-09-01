import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users-service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private UserService: UsersService, private router: Router) { }

  folder = ''
  registerObj:any = {
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  }

  public registerError = '';
  public showRegisterError = false;
  public visible_spinner = false;

  ngOnInit() {

    this.folder = 'Registration'
    this.showRegisterError = false
    this.visible_spinner = false
  }


  register() {
    this.visible_spinner = true
    setTimeout(() => {
      this.doRegistration()
      this.visible_spinner = false
    }, 2000);
    
  }

  private doRegistration() {
    this.showRegisterError = false
    console.log('called doRegistration()', Date())
    console.log(this.registerObj)
    this.UserService.Register(this.registerObj).subscribe(response => {
      let registerdUser: any = response;
      if(registerdUser.message) {
        this.showRegisterError = true
        this.registerError = registerdUser.message
        this.visible_spinner = false
      } else {
        this.showRegisterError = false
        this.visible_spinner = false
        this.router.navigate(['tasksapp/login'])
      }
    }, err => {
      this.visible_spinner = false
      console.log(err)
    })
  }

}
