import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService {

    private MT_TOKEN: string = 'MT_TOKEN';
    constructor() { }

    public setLoggedInUser(user: any): void {
        localStorage.setItem(this.MT_TOKEN, JSON.stringify(user));
    }

    public getLoggedInUser(): any {
        const user = localStorage.getItem(this.MT_TOKEN);
        return JSON.parse(user);
    }

}