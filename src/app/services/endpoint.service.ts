import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { equalParamsAndUrlSegments } from '@angular/router/src/router_state';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private http: Http) { }

  public login(email: string, password: string) {
      const header = new Headers();
      header.append('Content-Type', 'application/x-www-form-urlencoded');

      const params = new URLSearchParams();
      params.append('email', email);
      params.append('password', password);
      const body = params.toString();

      return this.http.post('http://localhost:3000/api/login', body, {headers: header});
  }
}
