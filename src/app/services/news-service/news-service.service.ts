import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroment';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }



  url = environment.taskTrackerBackendService.prod;

  createNews(News: any) {
    console.log(environment)
    return this.http.post(this.url + 'news/create', News, { headers: { 'Token': 'XHDODJKLJKJAJSOPKSASA'}})
  }
  
  getNews() {
    console.log(environment)
    return this.http.get(this.url + 'news/', { headers: { 'Token': 'XHDODJKLJKJAJSOPKSASA'}})
  }

  saveComment(newsId: any, comment: any) {
    console.log(environment)
    return this.http.post(this.url + 'news/' + newsId + '/comments/create', comment, { headers: { 'Token': 'XHDODJKLJKJAJSOPKSASA'}})
  }
  }

