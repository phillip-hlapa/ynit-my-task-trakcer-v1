import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  url = environment.taskTrackerBackendService.dev;

  UserLogin(login: any) {
    console.log(environment)
    return this.http.post(this.url + 'login', login, { headers: { 'Token': 'XHDODJKLJKJAJSOPKSASA'}})
  }

}
