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
      // name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      // confirmPassword: ['', [Validators.required]]
    });
  }

  login(value: LoginModel) {
    this.isLoading = true;
    this.authService.login(value)
      .subscribe(() => {
        this.userService.getUser().subscribe(userData => {
          this.authService.saveUserDetails(userData);
          this.snackBar.open('Привет ' + this.authService.User.name + ' !', 'Ok', {
            duration: 3000,
          });
          this.isLoading = false;
          
          this.routeService.redirectTo('/me');
          // this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
          // go to /me
        })
      });
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
// @Input() variav: string; - почитай про инпут