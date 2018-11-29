import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';
import { Gender } from '../enums/gender';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    userList: User[] = [];

    genders = [
        {
            name: 'Male',
            value: Gender.male
        },
        {
            name: 'Female',
            value: Gender.female
        }
    ];

    constructor(private endpointService: EndpointService) { }

    getUser() {
        return this.endpointService.getUserEndpoint().pipe(
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
