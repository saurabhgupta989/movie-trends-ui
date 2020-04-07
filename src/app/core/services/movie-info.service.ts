import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const URL = 'http://127.0.0.1:5000'
@Injectable(
    {
        providedIn: 'root'
    }
)
export class MovieinfoService {

    constructor(private http: HttpClient) { }

    fetchAllMovieinfo(queryParams = ''): Observable<any> {
        const apiUrl = URL + '/movie-info' + queryParams;
        return this.http.get(apiUrl);
    }

    fetchMovieinfo(id: string): Observable<any> {
        const apiUrl = URL + '/movie-info/' + id;
        return this.http.get(apiUrl);
    }

}