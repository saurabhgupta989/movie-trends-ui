import { Component, OnInit } from '@angular/core';
import { MovieinfoService } from '@mvt/core';
import { getInTheatreMovies, getComingSoonMovies } from 'src/app/core/fixture/movies';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})
export class MoviesContainerComponent implements OnInit {

  constructor(private readonly movieinfoService: MovieinfoService) {
    this.movieinfoService.fetchAllMovieinfo();
  }

  inTheatreMovies: any[];
  comingSoonMovies: any[];
  ngOnInit(): void {
    this.movieinfoService.fetchAllMovieinfo('?inTheatre=true').subscribe(res => {
      this.inTheatreMovies = res;
      this.movieinfoService.fetchAllMovieinfo('?comingSoon=true').subscribe(res => {
        this.comingSoonMovies = res;
      }, error => {
        console.log('error', error);
      });
    }, error => {
      console.log('error', error);
    });
  }

}
