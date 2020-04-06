import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn:'root'
    }
)
export class MovieinfoService {
    constructor(private http: HttpClient) { }

    fetchAllMovieinfo(): Observable<any> {
        return this.http.get('http://127.0.0.1:5000/movie-info');
    }
}