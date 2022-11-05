import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl();
  password = new FormControl();

  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'Trường này không được bỏ trống';
    }
    if (this.password.hasError('required')) {
      return 'Trường này không được bỏ trống';
    }
    return;
  }

  constructor() {}

  ngOnInit(): void {
  }

}
