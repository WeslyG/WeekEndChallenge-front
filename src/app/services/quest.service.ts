import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { QuestModel } from '../models/quest.model';
import { AnswerModel } from '../models/answer.model';
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
                return response.json();
            })
        );
    }

    answerQuest(id, answer) {
        return this.endpointService.answerQuest(id, answer).pipe(
            map((response: Response) => {
                return <AnswerModel>response.json();
            })
        );
    }
}
