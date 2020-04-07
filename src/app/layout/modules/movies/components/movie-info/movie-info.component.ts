import { Component, OnInit } from '@angular/core';
import { MovieinfoService } from '@mvt/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  constructor(
    private readonly movieinfoService: MovieinfoService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieinfoService.fetchMovieinfo(id).subscribe(res => {
      console.log(res);
    })
  }

}
