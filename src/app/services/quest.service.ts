import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { QuestModel } from '../models/quest.model';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';

@Injectable({
    providedIn: 'root'
})

export class QuestService {

    constructor(private endpointService: EndpointService) { }

    getOneQuest(id) {
        return this.endpointService.getOneQuest(id).pipe(
            map((response: Response) => {
                return <QuestModel>response.json();
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
