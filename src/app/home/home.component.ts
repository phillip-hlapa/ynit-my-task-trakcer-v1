import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { BehaviorSubject } from 'rxjs';
import { NewsServiceService } from '../services/news-service/news-service.service';
import { UsersService } from '../services/users-service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  isLoggedIn = new BehaviorSubject<boolean>(this.usersService.isAuthenticated());
  commentObj = {
    comment: "",
    username: ""

  }

  newsObject = {
    news_header_subtitle: '',
    news_header_title: '',
    news_header_content: '',
    userId: sessionStorage.getItem('userId')
  }

  constructor(public usersService: UsersService, private newsServiceService: NewsServiceService) { }

  folder = 'Welcome Home'
  news: any
  loggedInUser = ''
  showNewsErrorMessage = false

  ngOnInit() {
    this.loggedInUser = sessionStorage.getItem('username')
    this.newsServiceService.getNews().subscribe(news => {
    this.news = news;
    this.commentObj.username = ''
    this.commentObj.comment = ''
    this.newsObject.news_header_subtitle = ''
    this.newsObject.news_header_title = ''
    this.newsObject.news_header_content = ''
    if(this.news.length === 0) {
      this.showNewsErrorMessage = true;
    } else { 
      this.showNewsErrorMessage = false
    }
    }, error => {
      console.log(error)
    })
  }

  sendComment(newId: any) {
    console.log('commenting: ' + newId)
    this.commentObj.username = sessionStorage.getItem('username')
    this.newsServiceService.saveComment(newId, this.commentObj).subscribe(result => {
      this.ngOnInit()
    })
  }


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.newsServiceService.createNews(this.newsObject).subscribe(result => {
      this.cancel()
      this.ngOnInit()
    }, error => {
      console.log(error)
    })
    this.cancel()
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log('hello')
    }
  }
}
