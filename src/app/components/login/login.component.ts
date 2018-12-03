import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginModel } from 'src/app/models/loginModel';
import { UserService } from '../../services/user.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private userService: UserService,
    private routeService: RouteService
    ) {}

  loginForm: FormGroup;
  isLoading = false;
  router: Router;
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(value: LoginModel) {
    this.isLoading = true;
    this.authService.login(value)
      .subscribe(() => {
        this.userService.getUser().subscribe(userData => {
          this.authService.saveUserDetails(userData);
          this.snackBar.open('Hello, ' + this.authService.User.name + '!', 'Ok', {
            duration: 3000,
          });
          this.isLoading = false;
          this.routeService.redirectTo('/me');
        },
          (error: Response) => {
            this.isLoading = false;
            console.log(error);
            this.snackBar.open(error.text().toString(), 'Ok', {
              duration: 3500,
            });
          });
      },
        (error: Response) => {
          this.isLoading = false;
          if (error.status === 401) {
            this.snackBar.open('Неверный логин или пароль', 'Ok', {
              duration: 3000,
            });
          } else if (error.status === 400 ) {
            this.snackBar.open('Такого пользователя не существует', 'Ok', {
              duration: 3000,
            });
          } else {
          this.snackBar.open(error.text().toString(), 'Ok', {
            duration: 3500,
          });
        }
      });
  }

}

  // passwordMatch(password, confirmPassword) {
  //   return (group: FormGroup) => {
  //     const passwordInput = group.controls[password];
  //     const passwordConfirmationInput = group.controls[confirmPassword];
  //     if (passwordInput.value !== passwordConfirmationInput.value) {
  //       return passwordConfirmationInput.setErrors({ notEquivalent: true });
  //     } else {
  //       return passwordConfirmationInput.setErrors(null);
  //     }
  //   };
  // }