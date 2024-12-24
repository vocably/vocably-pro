import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { isUserLoggedIn$ } from '../isUserLoggedIn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appBaseUrl = environment.appBaseUrl;
  showQRCode = false;

  isLoggedIn$ = isUserLoggedIn$;

  loginUrl = `${environment.appBaseUrl}/page/welcome`;

  ngOnInit() {}
}
