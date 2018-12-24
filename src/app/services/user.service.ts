import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private endpointService: EndpointService) { }

    getUser(id: string) {
        return this.endpointService.getUserEndpoint(id).pipe(
            map((response: Response) => {
                return <User>response.json();
            })
        );
    }

    getScoreBoard() {
        return this.endpointService.getScoreBoard().pipe(
            map((response: Response) => {
                return response.json();
            })
        );
    }
}
