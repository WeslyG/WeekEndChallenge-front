import { Gender } from '../enums/gender';

export class User {
    constructor(id?: string, name?: string, login?: string, gender?: Gender, score?: number, questCount?: number, quests?: []) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.gender = gender;
        this.score = score;
        this.questCount = questCount;
        this.quests = quests;
    }

    id: string;
    name: string;
    login: string;
    score: number;
    questCount: number;
    quests: [];
    gender: Gender;
}
