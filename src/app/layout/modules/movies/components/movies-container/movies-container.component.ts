import { Component, OnInit } from '@angular/core';
import { MovieinfoService } from '@mvt/core';
import { getMovies } from 'src/app/core/fixture/movies';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})
export class MoviesContainerComponent implements OnInit {

  constructor(private readonly movieinfoService: MovieinfoService) {
    this.movieinfoService.fetchAllMovieinfo();
  }

  movies: any[];
  ngOnInit(): void {
    this.movieinfoService.fetchAllMovieinfo().subscribe(res => {
      this.movies = res;
    });
    // this.movies=getMovies();
  }

}
