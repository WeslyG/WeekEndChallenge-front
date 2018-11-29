import { Gender } from '../enums/gender';

export class User {
    constructor(id?: string, name?: string, email?: string, birthDay?: Date, gender?: Gender) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDay = birthDay;
        this.gender = gender;
    }

    id: string;
    name: string;
    email: string;
    birthDay: Date;
    gender: Gender;
}

