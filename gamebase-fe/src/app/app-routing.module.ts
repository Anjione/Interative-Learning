import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysadminComponent } from './sysadmin/sysadmin.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';

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
    component: StudentComponent,
    loadChildren: () => import('./components/student/student.module').then(m => m.StudentModule)
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
