import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, AuthService } from 'angularx-social-login';

@Component({
  selector: 'mvt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  display: boolean;
  leftNavOptions: any[];
  user: any;
  constructor(private readonly router: Router, private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.leftNavOptions = [
      { name: 'Movies', code: 'MOVIE' },
      { name: 'Analytics', code: 'ANALYTICS' }
    ];
    this.fetchLoggedInUserInfo();
  }

  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      console.log(res);
      localStorage.setItem('MT_TOKEN', JSON.stringify(res));
      this.user = res;
    });
  }

  public signOut(): void {
    this.authService.signOut();
    localStorage.setItem('MT_TOKEN', null);
    this.user = null;
  }

  public navigateToModule(event: any): void {
    if (event.value.code === 'ANALYTICS') {
      this.router.navigate(['analytics']);
    } else if (event.value.code === 'MOVIE') {
      this.router.navigate(['movies']);
    }
  }

  public fetchLoggedInUserInfo(): void {
    const authToken = localStorage.getItem('MT_TOKEN');
    this.user = JSON.parse(authToken);
  }
}
