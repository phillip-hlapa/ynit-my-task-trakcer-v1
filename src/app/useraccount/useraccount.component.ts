import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users-service/users.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.scss'],
})
export class UseraccountComponent implements OnInit {

  @ViewChild('doughnutCanvas', {static: true}) doughnutCanvas: ElementRef;
  doughnutChart: any;

  @ViewChild('lineCanvas', {static: true}) private lineCanvas: ElementRef;
  lineChart: any;

  @ViewChild('barCanvas', {static: true}) private barCanvas: ElementRef;
  barChart: any;

  isImageUploaded = false
  visible_spinner = true
  canEdit = false
  update_Status = false;
  previewImage = ''
  userObj : any = {
    username: String,
    email: String,
    role: String
  }


  graph = {
    grapLabelsArray: ['Feb 22', 'March 22', 'April 22', 'Trend', 'Variation', 'Performance YTD'],
    grapLabelsArrayValues: [10, 60, 50, 30, 10],
    graphName: 'Patience Experience Measures'
  }

  constructor(private UserService: UsersService) { }
  folder = 'My Account'
  ngOnInit() {
    this.barChartMethod();
    setTimeout(() => {
      this.UserService.getUser(sessionStorage.getItem('userId')).subscribe(user => {
        this.userObj = user 
        console.log(user)
      }, error => {
        console.log(error)
      })
      this.getProfilePic()
      this.visible_spinner = false;
    }, 3000);
  }

 startEdit() {
  this.canEdit = true
 }

 getProfilePic() {
  this.UserService.getUserProfilePic(sessionStorage.getItem('userId')).subscribe(userImage => {
    let data1: any = userImage
    this.previewImage = data1.data
    this.isImageUploaded = true
    console.log('received preview image => ', data1.name)
  }, error => {
    this.isImageUploaded = true
    console.log(error)
  })
 }
 updateProfile() {
  this.canEdit = false
  this.UserService.updateUser( this.userObj, sessionStorage.getItem('userId')).subscribe(result => {
    // console.log(result)
    this.update_Status = true
    setTimeout(() => {
      this.update_Status = false
    }, 2000);
  }, error => {
    this.update_Status = false
    console.log(error)
  })
 }


 uploadPicture(event: any) {
  // console.log(event)
    const photo = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e: any) => {
      console.log(e.target.result);
      this.previewImage = e.target.result
      this.isImageUploaded = true

      this.UserService.saveUserProfilePic({name: photo.name + Date.now, data: e.target.result, userId: sessionStorage.getItem('userId')}).subscribe(result => {
        console.log(result);
      }, err => {
        console.log(err)
      })

    };
    reader.readAsDataURL(photo);

    const imageFormData = new FormData();
    imageFormData.append('image', photo, photo.name);

    setTimeout(() => {
      console.log(imageFormData)
    }, 2000);


    console.log(photo)
 }





 barChartMethod() {
  this.barChart = this.createBarGraph(this.graph)
}


public createBarGraph(graphData: any) {
 
  return this.barChart = new Chart(this.barCanvas.nativeElement, {
    type: 'bar',
    data: {
      labels: graphData.grapLabelsArray,
      datasets: [{
        label: graphData.graphName,
        data: graphData.grapLabelsArrayValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        screenY: {
          ticks: {
            // beginAtZero: true
          }
        }
      }
    }
  });
  }


}