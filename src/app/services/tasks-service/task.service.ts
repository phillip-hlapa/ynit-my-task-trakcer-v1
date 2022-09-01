import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  url = environment.taskTrackerBackendService.prod;
  constructor(private http: HttpClient) { }


  createTask(Task: any) {
    console.log(environment)
    return this.http.post(this.url + 'tasks/create', Task, { headers: { 'Token': 'XHDODJKLJKJAJSOPKSASA'}})
  }
  
  getUserTasks() {
    console.log(environment)
    return this.http.get(this.url + 'tasks/all/' + sessionStorage.getItem('userId'), { headers: { 'Token': 'XHDODJKLJKJAJSOPKSASA'}})
  }
}
