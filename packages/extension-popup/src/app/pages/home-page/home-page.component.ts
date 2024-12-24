import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { needsOnboarding$ } from '../../../needsOnboarding';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  needsOnboarding$ = needsOnboarding$;

  welcomeUrl = `${environment.appBaseUrl}/welcome`;

  showQRCode = false;

  constructor() {}

  ngOnInit(): void {}
}
