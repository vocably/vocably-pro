import { Component, OnInit } from '@angular/core';
import { ExtensionSettings } from '@vocably/extension-messages';
import { ReplaySubject } from 'rxjs';
import { environment } from '../environments/environment';
import { isUserLoggedIn$ } from '../isUserLoggedIn';
import { needsOnboarding$ } from '../needsOnboarding';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appBaseUrl = environment.appBaseUrl;
  showQRCode = false;

  settings$ = new ReplaySubject<ExtensionSettings>();
  isLoggedIn$ = isUserLoggedIn$;
  needsOnboarding$ = needsOnboarding$;

  loginUrl = `${environment.appBaseUrl}/page/welcome`;
  welcomeUrl = `${environment.appBaseUrl}/welcome`;

  ngOnInit() {
    environment.getSettings().then((settings) => {
      this.settings$.next(settings);
    });
  }

  setSettings(partialSettings: Partial<ExtensionSettings>) {
    environment
      .setSettings(partialSettings)
      .then((settings) => this.settings$.next(settings));
  }
}
