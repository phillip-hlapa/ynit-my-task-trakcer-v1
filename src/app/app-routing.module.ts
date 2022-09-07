import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreatetaskComponent } from './createtask/createtask.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/guard.guard';
import { TaskmanagementComponent } from './taskmanagement/taskmanagement.component';
import { TasksprogressComponent } from './tasksprogress/tasksprogress.component';
import { TasksviewComponent } from './tasksview/tasksview.component';
import { UsersService } from './services/users-service/users.service';
import { UseraccountComponent } from './useraccount/useraccount.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasksapp/home',
    pathMatch: 'full'
  },
  {
    path: 'tasksapp',
    redirectTo: 'tasksapp/home',
    pathMatch: 'full',
    
  },
  {
    path: 'tasksapp/login',
    component: LoginComponent
  },
  // {
  //   // path: 'tasksapp/logout',
  //   // component: LogoutComponent,

  // },
  {
    path: 'tasksapp/tasks',
    component: TasksviewComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'tasksapp/register',
    component: RegisterComponent
  },
  {
    path: 'tasksapp/createtask',
    component: CreatetaskComponent
  },
  {
    path: 'tasksapp/tasksmanagement',
    component: TaskmanagementComponent
  },
  {
    path: 'tasksapp/tasksprogress',
    component: TasksprogressComponent
  },
  {
    path: 'tasksapp/home',
    component: HomeComponent
  },
  {
    path: 'tasksapp/useraccount',
    component: UseraccountComponent
  },
  {
    path: 'tasksapp/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [AuthGuard, UsersService]
})
export class AppRoutingModule {}
