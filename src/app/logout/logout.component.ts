import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  
  folder = ''
  visible_spinner = true
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.folder = "Logout"
  }

}
