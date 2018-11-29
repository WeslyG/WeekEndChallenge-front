import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { LocalStorageService } from './localStorage.service';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { LoginModel } from '../models/loginModel';
import { User } from '../models/user.model';
import { DbKeys } from './db-keys';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private endpointService: EndpointService,
    private localStorageService: LocalStorageService,
    ) { }

  public login(value: LoginModel) {
    return this.endpointService.getLoginEndpoint(value.email, value.password).pipe(
      map((reponse: Response) => {
        const token = reponse.json().id_token;
        this.saveUserDetails(token);
        return reponse.ok;
      })
    )}

  // public saveUserDetails(data: string) {
  //   this.localStorageService.saveDataToStorage('AuthToken', data);
  // }

  public saveUserDetails(user: User) {
    this.localStorageService.saveDataToStorage(DbKeys.USER, JSON.stringify(user));
  }

  private processLogin(id_token: string) {
    this.localStorageService.saveDataToStorage(DbKeys.ID_TOKEN, id_token);
  }

  public logout() {
    this.localStorageService.clearStorage();
  }
  
  get User(): User {
    const user = <User>this.localStorageService.getDataFromStorage(DbKeys.USER);
    return user;
  }

}
