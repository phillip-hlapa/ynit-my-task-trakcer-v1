import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  url = environment.taskTrackerBackendService.dev;


  Register(User: any) {
    console.log(environment)
    return this.http.post(this.url + 'register', User, { headers: { 'Token': 'XHDODJKLJKJAJSOPKSASA'}})
  }

  UserLogin(login: any) {
    console.log(environment)
    return this.http.post(this.url + 'login', login, { headers: { 'Token': 'XHDODJKLJKJAJSOPKSASA'}})
  }
  
  isAuthenticated() {
    let isLoggedIn = sessionStorage.getItem('userId');
    let logged = true;
    console.log('is authenticated (isAuthenticated): ' + isLoggedIn)
    if(isLoggedIn === undefined || isLoggedIn === null || isLoggedIn === '') {
      logged = false
    } else {
      logged = true;
    }
    console.log('is logged in: ' + logged)
    return logged;
  }

}
