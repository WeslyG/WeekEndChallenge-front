import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { LoginModel } from 'src/app/models/loginModel';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    // public snackBar: MatSnackBar,
    private userService: UserService,
    ) {}

  loginForm: FormGroup;
  isLoading = false;
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(value: LoginModel) {
    this.isLoading = true;
    this.authService.login(value)
      .subscribe(() => {
        this.userService.getUser().subscribe(userData => {
          this.authService.saveUserDetails(userData);
          // this.snackBar.open('Hello, ' + this.authService.User.name + '!', 'Ok', {
          //   duration: 3000,
          // });
          this.isLoading = false;
          // go to /me
        })
      });
  }
}
// @Input() variav: string; - почитай про инпут