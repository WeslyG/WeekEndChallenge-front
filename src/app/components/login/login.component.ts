import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ILogin } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
  }

  // @Input() variav: string; - почитай про инпут
  // типизировать
  email: string;
  password: string;

  // забрать данные с формы
  login() {
    // let data: ILogin;
    // data.email
    this.authService.login(this.email, this.password).subscribe((res: string) => {
      alert(res);
      //service.func....
    })
    // .subscube
  }
}
