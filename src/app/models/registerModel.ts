export class RegisterModel {
    constructor(name?, login?, password?: string) {
        this.name = name;
        this.login = login;
        this.password = password;
    }
    login: string;
    name: string;
    password: string;
}