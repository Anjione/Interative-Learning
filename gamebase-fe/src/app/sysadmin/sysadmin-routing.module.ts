import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizManageComponent } from './quiz-manage/quiz-manage.component';
import { StudentManageComponent } from './student-manage/student-manage.component';
import { TeacherManageComponent } from './teacher-manage/teacher-manage.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'student-manage', component: StudentManageComponent},
  {path: 'teacher-manage', component: TeacherManageComponent},
  {path: 'quiz-manage', component: QuizManageComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysadminRoutingModule { }
