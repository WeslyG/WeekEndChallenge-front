import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { LocalStorageService } from './services/localStorage.service';
import { DbKeys } from './services/db-keys.service';
import { RouteService } from './services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'weekendchallenge';

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private routerService: RouteService
  ) {}

  public isLogin() {
    if (this.localStorageService.getDataFromStorage(DbKeys.ID_TOKEN)) {
      return true;
    } else {
      return false;
    }
  }

  public userName() {
    const user = this.localStorageService.getDataFromStorage(DbKeys.USER);
    return user.name;
  }

  public logout() {
    if (this.router.url === '/user/me') {
      this.routerService.redirectTo('/');
      this.localStorageService.clearStorage();
    }
    this.localStorageService.clearStorage();
  }
}
