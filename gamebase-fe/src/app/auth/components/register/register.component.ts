import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username = new FormControl();
  password = new FormControl();
  name = new FormControl();
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
    if (this.name.hasError('required')) {
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

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  public user = {
    username: '',
    password: '',
    name: '',
    email: '',
  };

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this.snackBar.open("Username là bắt buộc", 'ok', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    }

    this.userService.addUser(this.user).subscribe(
      (data:any) => {
        console.log(data);
        Swal.fire('Success', 'User ' + data.id + ' đăng ký thành công', 'success');
      },
      (error) => {
        console.log(error);
        this.snackBar.open("Có lỗi rồi đấy", 'Cancel', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
     )
  }
}
