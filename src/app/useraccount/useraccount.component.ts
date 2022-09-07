import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users-service/users.service';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.scss'],
})
export class UseraccountComponent implements OnInit {

  visible_spinner = true
  canEdit = false
  update_Status = false;
  userObj : any = {
    username: String,
    email: String,
    role: String
  }
  constructor(private UserService: UsersService) { }
  folder = 'My Account'
  ngOnInit() {
    setTimeout(() => {
      this.UserService.getUser(sessionStorage.getItem('userId')).subscribe(user => {
        this.userObj = user 
        console.log(user)
      }, error => {
        console.log(error)
      })
      this.visible_spinner = false;
    }, 3000);
  }

 startEdit() {
  this.canEdit = true
 }
 updateProfile() {
  this.canEdit = false
  this.UserService.updateUser( this.userObj, sessionStorage.getItem('userId')).subscribe(result => {
    console.log(result)
    this.update_Status = true
    setTimeout(() => {
      this.update_Status = false
    }, 2000);
  }, error => {
    this.update_Status = false
    console.log(error)
  })
 }


 uploadPicture() {}

}
