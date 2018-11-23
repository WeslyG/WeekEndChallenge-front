import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { EndpointService } from './endpoint.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private endpointService: EndpointService) { }
    public login(username: string, password: string) {
      return this.endpointService.login(username, password).pipe(
        map((reponse: Response) => {
          return reponse.json().id_token;
        })
      )  
    }
}
