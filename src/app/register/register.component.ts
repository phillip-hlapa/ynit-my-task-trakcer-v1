import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor() { }

  folder = ''
  registerObj:any = {
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  }
  ngOnInit() {

    this.folder = 'Registration'

  }


  register() {
   this.doRegistration()
  }

  private doRegistration() {
    console.log('called doRegistration()', Date())
    console.log(this.registerObj)
    if(this.registerObj.password != this.registerObj.confirmpassword) { 
      
    } else {

    }
  }

}
