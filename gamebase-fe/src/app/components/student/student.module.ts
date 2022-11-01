import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoQuizComponent } from './do-quiz/do-quiz.component';
import { JoinRoomComponent } from './join-room/join-room.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DoQuizComponent,
    JoinRoomComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
