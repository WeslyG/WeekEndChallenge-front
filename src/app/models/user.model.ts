import { Gender } from '../enums/gender';

export class User {
    constructor(id?: string, name?: string, login?: string, birthDay?: Date, gender?: Gender) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.birthDay = birthDay;
        this.gender = gender;
    }

    id: string;
    name: string;
    login: string;
    birthDay: Date;
    gender: Gender;
}