import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { QuestListModel } from '../models/questList.model';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';

@Injectable({
    providedIn: 'root'
})

export class QuestListService {

    constructor(private endpointService: EndpointService) { }

    getQuestList() {
        return this.endpointService.getQuestList().pipe(
            map((response: Response) => {
                return response.json();
            })
        );
    }
}
