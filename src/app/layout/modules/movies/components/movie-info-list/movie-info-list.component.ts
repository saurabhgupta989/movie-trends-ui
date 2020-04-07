import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Router } from '@angular/router';

@Component({
  selector: 'mvt-movie-info-list',
  templateUrl: './movie-info-list.component.html',
  styleUrls: ['./movie-info-list.component.css']
})
export class MovieInfoListComponent implements OnInit {

  sortOptions: SelectItem[];

  sortField: string;

  sortOrder: number;

  @Input('movies') movies: any[];

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
    this.sortOptions = [
      { label: 'Newest First', value: '!Released' },
      { label: 'Oldest First', value: 'Released' },
      { label: 'Name', value: 'title' }
    ];
  }

  navigateToMovieinfo(event: Event, movie: any): void {
    this.router.navigate(['movies', 'view', movie.id]);
    event.preventDefault();
  }

  onSortChange(event): void {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
