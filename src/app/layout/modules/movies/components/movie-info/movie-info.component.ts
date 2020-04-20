import { Component, OnInit } from '@angular/core';
import { MovieinfoService } from '@mvt/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  public movieInfo;
  public rating: number = 0;
  constructor(
    private readonly movieinfoService: MovieinfoService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieinfoService.fetchMovieinfo(id).subscribe(res => {
      this.movieInfo = res;
      console.log(res);
    })
  }

  public getActorsOrWritersOrDirectorsName(list: Array<any>): string {
    if (list) {
      let names: string = '';
      list.forEach(obj => {
        names = (names) ? names + ',' + obj.name : obj.name;
      });
      return names;
    }
  }

  public getGenre(list: Array<any>): string {
    if (list) {
      let names: string = '';
      list.forEach(obj => {
        names = (names) ? names + ',' + obj.title : obj.title;
      });
      return names;
    }
  }

}
