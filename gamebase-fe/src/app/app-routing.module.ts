import { UserComponent } from './components/user/user.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysadminComponent } from './sysadmin/sysadmin.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'sysadmin', 
    component: SysadminComponent,
    loadChildren: () => import('./sysadmin/sysadmin.module').then(m => m.SysadminModule)
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    loadChildren: () => import('./components/teacher/teacher.module').then(m => m.TeacherModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
