import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import config from '../config/config';
import { LocalStorageService } from './localStorage.service';
import { Observable } from 'rxjs';
import { DbKeys } from './db-keys.service';

@Injectable({
  providedIn: 'root'
})

export class EndpointService {
  constructor(private http: Http,
    private localStorageService: LocalStorageService,
    ) { }

  getLoginEndpoint(login: string, password: string): Observable<Response> {
    // TODO: refactor need
    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    const params = new URLSearchParams();
    params.append('login', login);
    params.append('password', password);
    const body = params.toString();

    return this.http.post(`${config.backend.backEndUrl}/login`, body, {headers: header});
  }

  getRegisterEndpoint(name, login, password: string) {
    // TODO: refactor need too
    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('login', login);
    params.append('password', password);
    const body = params.toString();

    return this.http.post(`${config.backend.backEndUrl}/register`, body, { headers: header });
  }

  getOneQuest(id): Observable<Response> {
    return this.http.get(`${config.backend.backEndUrl}/quest/${id}`, this.getAuthHeader());
  }

  // TODO: добавить параметр для просмотра других пользователей, без параметра идти на /me
  getUserEndpoint(): Observable<Response> {
    return this.http.get(`${config.backend.backEndUrl}/user/me`, this.getAuthHeader());
  }

  getQuestList(): Observable<Response> {
    return this.http.get(`${config.backend.backEndUrl}/quest`);
  }

  private getAuthHeader(): RequestOptions {
    const accessToken = this.localStorageService.getDataFromStorage(DbKeys.ID_TOKEN);
    const headers = new Headers({ 'Authorization': 'Bearer ' + accessToken });
    return new RequestOptions({ headers: headers });
  }

}
