import { Injectable } from '@angular/core';
import { UsersService } from '../users-service/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isLoggedIn = false;

  constructor(private userService: UsersService) { }



  isAuthenticated() {
    this.isLoggedIn = this.userService.isAuthenticated();
    console.log('is logged in? => ' +  this.isLoggedIn)
    return this.isLoggedIn;
  }
  setAuthenticated(value: boolean) {
    this.isLoggedIn = true;
  }
}
