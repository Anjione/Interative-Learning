import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username = new FormControl();
  password = new FormControl();
  lastname = new FormControl();
  firstname = new FormControl();
  email = new FormControl();
  dateOfBirth = new FormControl();  
  gender = new FormControl();


  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'Trường này không được bỏ trống';
    }
    if (this.password.hasError('required')) {
      return 'Trường này không được bỏ trống';
    }
    if (this.lastname.hasError('required')) {
      return 'Trường này không được bỏ trống';
    }
    if (this.firstname.hasError('required')) {
      return 'Trường này không được bỏ trống';
    }
    if (this.email.hasError('required')) {
      return 'Trường này không được bỏ trống';
    }
    if (this.dateOfBirth.hasError('required')) {
      return 'Trường này không được bỏ trống';
    }
    if (this.gender.hasError('required')) {
      return 'Trường này không được bỏ trống';
    }
    return;
  }

  constructor() { }

  public user = {
    username: '',
    password: '',
    confirmPassword: '',
    lastname: '',
    firstname: '',
    email: '',
  };

  ngOnInit(): void {
  }

  onSubmit(){
    //alert("Submitted")
    console.log(this.user);
  }
}
