import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { MyQuizComponent } from './my-quiz/my-quiz.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { QuizComponent } from './my-quiz/quiz/quiz.component';


@NgModule({
  declarations: [
    MyQuizComponent,
    CreateQuizComponent,
    CreateRoomComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
