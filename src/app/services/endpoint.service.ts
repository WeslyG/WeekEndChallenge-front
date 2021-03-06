import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
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

    return this.http.post(`${environment.apiUrl}/login`, body, {headers: header});
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

    return this.http.post(`${environment.apiUrl}/register`, body, { headers: header });
  }

  getOneQuest(id): Observable<Response> {
    return this.http.get(`${environment.apiUrl}/quest/${id}`, this.getAuthHeader());
  }

  getUserEndpoint(userId): Observable<Response> {
      return this.http.get(`${environment.apiUrl}/user/${userId}`, this.getAuthHeader());
  }

  getScoreBoard(): Observable<Response> {
    return this.http.get(`${environment.apiUrl}/user/list`);
  }

  getQuestList(): Observable<Response> {
    return this.http.get(`${environment.apiUrl}/quest`);
  }

  getQuestListAuth(): Observable<Response> {
    return this.http.get(`${environment.apiUrl}/quest/protected`, this.getAuthHeader());
  }

  answerQuest(questId, answer): Observable<Response> {
    const header = new Headers();
    const accessToken = this.localStorageService.getDataFromStorage(DbKeys.ID_TOKEN);
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    header.append('Authorization', `Bearer ${accessToken}`);

    const params = new URLSearchParams();
    params.append('questId', questId);
    params.append('answer', answer);
    const body = params.toString();

    return this.http.post(`${environment.apiUrl}/quest/answer`, body, { headers: header });
  }


  private getAuthHeader(): RequestOptions {
    const accessToken = this.localStorageService.getDataFromStorage(DbKeys.ID_TOKEN);
    const headers = new Headers({ 'Authorization': 'Bearer ' + accessToken });
    return new RequestOptions({ headers: headers });
  }

}
