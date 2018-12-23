import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginModel } from 'src/app/models/loginModel';
import { RegisterModel } from 'src/app/models/registerModel';
import { UserService } from '../../services/user.service';
import { RouteService } from 'src/app/services/route.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { DbKeys } from 'src/app/services/db-keys.service';

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
    private routeService: RouteService,
    private localStorageService: LocalStorageService
    ) {}

  loginForm: FormGroup;
  registerForm: FormGroup;
  isLoading = false;
  router: Router;
  hide_pass_login = true;
  hide_pass_registry = true;
  hide_pass_confirm = true;
  show_register = false;
  user_login = '';

  ngOnInit() {
    // TODO: add guard
    if (this.localStorageService.getDataFromStorage(DbKeys.ID_TOKEN)) {
      this.routeService.redirectTo('/me');
    } else {
      this.loginForm = this.fb.group({
        login: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
      this.registerForm = this.fb.group({
        name: ['', [Validators.required]],
        login: ['', [Validators.required]],
        password: ['', [Validators.required]],
        passwordConfirm: ['', [Validators.required]]
      }, {
          validator: this.passwordMatch('password', 'passwordConfirm')
      });
    }
  }

  login(value: LoginModel) {
    this.isLoading = true;
    this.authService.login(value)
      .subscribe(res => {
        this.userService.getUser(res).subscribe(userData => {
          this.authService.saveUserDetails(userData);
          this.snackBar.open('Привет, ' + this.authService.User.name + '!', 'Ok', {
            duration: 3500,
          });
          this.isLoading = false;
          this.routeService.redirectTo('/user/me');
        },
          (error: Response) => {
            this.isLoading = false;
            this.snackBar.open(error.text().toString(), 'Ok', {
              duration: 3500,
            });
          });
      },
        (error: Response) => {
          this.isLoading = false;
          if (error.status === 400) {
            console.log(error);
            this.snackBar.open('Неверный логин или пароль 😕', 'Ok', {
              duration: 3500,
            });
          } else if (error.status === 0 ) {
            this.snackBar.open('Сервер не доступен 😢', 'Ok', {
              duration: 3500,
            });
          } else {
          this.snackBar.open(error.text().toString(), 'Ok', {
            duration: 3500,
          });
        }
      });
  }

  registration(value: RegisterModel) {
    this.isLoading = true;
    this.authService.register(value)
      .subscribe(() => {
        this.isLoading = false;
        this.show_register = true;
        this.user_login = value.login;
      },
        (error: Response) => {
          this.isLoading = false;
          if (error.status === 400) {
            this.snackBar.open('Что то пошло не так 😦', 'Ok', {
              duration: 3500,
            });
          } else if (error.status === 0) {
            this.snackBar.open('Сервер не доступен 😢', 'Ok', {
              duration: 3500,
            });
          } else if (error.status === 409) {
            this.snackBar.open('Такой пользователь уже зарегистрирован 😨', 'Ok', {
              duration: 3500,
            });
          } else {
            this.snackBar.open(error.text().toString(), 'Ok', {
              duration: 3500,
            });
          }
        });
  }

  redirectAfterLogin() {
    this.show_register = false;
    this.routeService.redirectTo('/login');
  }

  passwordMatch(password, confirmPassword) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[password];
      const passwordConfirmationInput = group.controls[confirmPassword];
        if (passwordInput.value !== passwordConfirmationInput.value) {
          return passwordConfirmationInput.setErrors({ notEquivalent: true });
        } else {
          return passwordConfirmationInput.setErrors(null);
        }
      };
  }
}

