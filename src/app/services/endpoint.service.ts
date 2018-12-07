import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import  config from '../config/config';
import { LocalStorageService } from './localStorage.service'
import { Observable } from 'rxjs';
import { DbKeys } from './db-keys.service';

@Injectable({
  providedIn: 'root'
})

export class EndpointService {
  constructor(private http: Http,
    private LocalStorageService: LocalStorageService,
    ) { }
  
  getRegisterEndpoint () {
    return true;
  }
  
  getLoginEndpoint(login: string, password: string): Observable<Response> {
    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const params = new URLSearchParams();
    params.append('login', login);
    params.append('password', password);
    const body = params.toString();

    return this.http.post(`${config.backend.backEndUrl}/login`, body, {headers: header});
  }

  getUserEndpoint(): Observable<Response> {
    return this.http.get(`${config.backend.backEndUrl}/user/me`, this.getAuthHeader());
  }

  private getAuthHeader(): RequestOptions {
    const accessToken = this.LocalStorageService.getDataFromStorage(DbKeys.ID_TOKEN);
    const headers = new Headers({ 'Authorization': 'Bearer ' + accessToken });
    return new RequestOptions({ headers: headers });
  }

}
