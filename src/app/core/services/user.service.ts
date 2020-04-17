import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService {

    private MT_TOKEN: string = 'MT_TOKEN';
    constructor(private readonly http: HttpClient) { }

    public setLoggedInUser(user: any): void {
        localStorage.setItem(this.MT_TOKEN, JSON.stringify(user));
    }

    public getLoggedInUser(): any {
        const user = localStorage.getItem(this.MT_TOKEN);
        return JSON.parse(user);
    }

    public saveUser(user: any): Observable<any> {
        return this.http.post('http://127.0.0.1:5000/user', user);
    }

}