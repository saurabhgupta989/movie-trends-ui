import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mvt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  display: boolean;
  leftNavOptions: any[];
  constructor() { }

  ngOnInit(): void {
    this.leftNavOptions = [
      { name: 'Movies', code: 'MOVIE' },
      { name: 'Analytics', code: 'ANALYTICS' }
    ];
  }
}
