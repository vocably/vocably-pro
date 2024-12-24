import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { isUserLoggedIn$ } from '../isUserLoggedIn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loginUrl = `${environment.appBaseUrl}/page/welcome`;

  isLoggedIn: 'yes' | 'no' | 'undefined' = 'undefined';

  ngOnInit() {
    isUserLoggedIn$.subscribe((isUserLoggedIn) => {
      this.isLoggedIn = isUserLoggedIn ? 'yes' : 'no';
    });
  }
}
