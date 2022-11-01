import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SysadminComponent } from './sysadmin/sysadmin.component';
import { SidenavComponent } from './sysadmin/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './sysadmin/header/header.component';
import { StudentManageComponent } from './sysadmin/student-manage/student-manage.component';
import { TeacherManageComponent } from './sysadmin/teacher-manage/teacher-manage.component';
import { QuizManageComponent } from './sysadmin/quiz-manage/quiz-manage.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { TeacherComponent } from './components/teacher/teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    SysadminComponent,
    SidenavComponent,
    HeaderComponent,
    StudentManageComponent,
    TeacherManageComponent,
    QuizManageComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    UserComponent,
    TeacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
