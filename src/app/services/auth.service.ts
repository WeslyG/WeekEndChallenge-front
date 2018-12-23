import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { LocalStorageService } from './localStorage.service';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { LoginModel } from '../models/loginModel';
import { User } from '../models/user.model';
import { DbKeys } from './db-keys.service';
import { RegisterModel } from '../models/registerModel';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private endpointService: EndpointService,
    private localStorageService: LocalStorageService,
    ) { }

  login(value: LoginModel) {
    return this.endpointService.getLoginEndpoint(value.login, value.password).pipe(
      map((reponse: Response) => {
        this.processLogin(reponse.json().access_token);
        return reponse.json().id;
      })
    );
  }

  register(value: RegisterModel) {
    return this.endpointService.getRegisterEndpoint(value.name, value.login, value.password).pipe(
      map((response: Response) => {
        return response.ok;
      })
    );
  }

  saveUserDetails(user: User) {
    this.localStorageService.saveDataToStorage(DbKeys.USER, JSON.stringify(user));
  }

  processLogin(id_token: string) {
    this.localStorageService.saveDataToStorage(DbKeys.ID_TOKEN, id_token);
  }

  logout() {
    this.localStorageService.clearStorage();
  }

  get User(): User {
    const user = <User>this.localStorageService.getDataFromStorage(DbKeys.USER);
    return user;
  }

}
