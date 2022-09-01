import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  url = environment.taskTrackerBackendService.prod;


  Register(User: any) {
    console.log(environment)
    return this.http.post(this.url + 'register', User, { headers: { 'Token': 'XHDODJKLJKJAJSOPKSASA'}})
  }

  UserLogin(login: any) {
    console.log(environment)
    return this.http.post(this.url + 'login', login, { headers: { 'Token': 'XHDODJKLJKJAJSOPKSASA'}})
  }
  
  isAuthenticated() {
    let userId = sessionStorage.getItem('userId');
    // console.log('is authenticated (isAuthenticated): ' + userId)
    if(userId === undefined || userId === null || userId === '') {
      // console.log('is logged in: false')
      return false
    } else {
      // console.log('is logged in: true')
      return true;
    }
    

  }

}
