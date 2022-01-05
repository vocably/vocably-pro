import { Component, OnInit } from '@angular/core';
import * as Bowser from 'bowser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { catchError, mapTo, mergeMap, Observable, of } from 'rxjs';

const browser = Bowser.getParser(window.navigator.userAgent);

@Component({
  selector: 'app-no-cards',
  templateUrl: './no-cards.component.html',
  styleUrls: ['./no-cards.component.scss'],
})
export class NoCardsComponent implements OnInit {
  isExtensionNeeded$: Observable<boolean> = of(
    browser.is('Chrome') && browser.is('desktop')
  ).pipe(
    mergeMap((isTheRightBrowser) => {
      if (!isTheRightBrowser) {
        return of(false);
      }

      return this.httpClient
        .get(
          `chrome-extension://${environment.chromeExtensionId}/manifest.json`
        )
        .pipe(
          mapTo(false),
          catchError(() => of(true))
        );
    })
  );

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}
}
