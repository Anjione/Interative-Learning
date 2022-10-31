import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './sysadmin/dashboard/dashboard.component';
import { QuizManageComponent } from './sysadmin/quiz-manage/quiz-manage.component';
import { StudentManageComponent } from './sysadmin/student-manage/student-manage.component';
import { TeacherManageComponent } from './sysadmin/teacher-manage/teacher-manage.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'student-manage', component: StudentManageComponent},
  {path: 'teacher-manage', component: TeacherManageComponent},
  {path: 'quiz-manage', component: QuizManageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
