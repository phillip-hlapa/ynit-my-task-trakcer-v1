import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksviewComponent } from './tasksview/tasksview.component';
import { TasksprogressComponent } from './tasksprogress/tasksprogress.component';
import { TaskmanagementComponent } from './taskmanagement/taskmanagement.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { AuthGuard } from './services/guard.guard';

@NgModule({
  declarations: [
    AppComponent, 
    TasksviewComponent, 
    TasksprogressComponent, 
    TaskmanagementComponent, 
    LoginComponent, 
    RegisterComponent, 
    LogoutComponent, 
    CreatetaskComponent,
    HomeComponent,
    UseraccountComponent
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
