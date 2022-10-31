import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SysadminComponent } from './sysadmin/sysadmin.component';
import { SidenavComponent } from './sysadmin/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './sysadmin/header/header.component';
import { HomeComponent } from './sysadmin/home/home.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { StudentManageComponent } from './sysadmin/student-manage/student-manage.component';
import { TeacherManageComponent } from './sysadmin/teacher-manage/teacher-manage.component';
import { QuizManageComponent } from './sysadmin/quiz-manage/quiz-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    SysadminComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    StudentManageComponent,
    TeacherManageComponent,
    QuizManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
