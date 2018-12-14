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

    getUser() {
        return this.endpointService.getUserEndpoint('me').pipe(
            map((response: Response) => {
                return <User>response.json();
            })
        );
    }

    // getUserList() {
    //     return this.endpointService.getUserListEndpoint().pipe(
    //         map((response: Response) => {
    //             this.userList = <User[]>response.json();
    //             return this.userList;
    //         })
    //     );
    // }

    // updateUser(user: User) {
    //     return this.endpointService.getUserUpdateEndpoint(user).pipe(
    //         map((response: Response) => {
    //             return <User>response.json();
    //         })
    //     );
    // }
}
