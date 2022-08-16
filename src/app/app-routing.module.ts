import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreatetaskComponent } from './createtask/createtask.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { TaskmanagementComponent } from './taskmanagement/taskmanagement.component';
import { TasksprogressComponent } from './tasksprogress/tasksprogress.component';
import { TasksviewComponent } from './tasksview/tasksview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasksapp/login',
    pathMatch: 'full'
  },
  {
    path: 'tasksapp/login',
    component: LoginComponent
  },
  {
    path: 'tasksapp/logout',
    component: LogoutComponent
  },
  {
    path: 'tasksapp/tasks',
    component: TasksviewComponent
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
    path: 'tasksapp/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
