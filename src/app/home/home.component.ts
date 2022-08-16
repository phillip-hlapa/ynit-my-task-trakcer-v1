import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  folder = 'Welcome Home'
  news: any
  ngOnInit() {
    this.news = [
      {
        news_img: 'news1.jpg',
        news_header_subtitle: 'Marriage',
        news_header_title: 'Mr & Mrs Hlapa',
        news_header_content: 'Finally decided tigh the knot! congradulations to the couple, wishing them all the best'
      },
      {
        news_img: 'news2.jpg',
        news_header_subtitle: 'Petrol',
        news_header_title: 'Petrol price hike',
        news_header_content: 'Proce of pretrol goes up again! we the residents of diepkloof should engage in a strike'
      },
      {
        news_img: 'news3.jpg',
        news_header_subtitle: 'Day Out',
        news_header_title: 'Weekend away',
        news_header_content: 'The holidays are approaching, if you live in soweto, you are welcome to attend our holidays celebration at Extreme park. Drinks will be served'
      },
      {
        news_img: 'news4.jpg',
        news_header_subtitle: 'Holiday',
        news_header_title: 'Trip To Scotland',
        news_header_content: 'We have created a whatsapp group that you can join if you are interested in a trip to scotland planned for December 2023 on 071234567'
      }
    ]
  }

}
