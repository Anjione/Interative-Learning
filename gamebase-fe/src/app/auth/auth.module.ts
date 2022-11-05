import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
  ]
})
export class AuthModule { }
