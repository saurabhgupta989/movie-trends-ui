import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const URL = 'https://movie-trends-be.herokuapp.com';
@Injectable(
    {
        providedIn: 'root'
    }
)
export class MovieinfoService {

    constructor(private readonly http: HttpClient) { }

    fetchAllMovieinfo(queryParams = ''): Observable<any> {
        const apiUrl = URL + '/movie-info' + queryParams;
        return this.http.get(apiUrl);
    }

    fetchMovieinfo(id: string): Observable<any> {
        const apiUrl = URL + '/movie-info/' + id;
        return this.http.get(apiUrl);
    }

}