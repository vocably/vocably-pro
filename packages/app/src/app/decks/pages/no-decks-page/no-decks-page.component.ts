import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeckListStoreService } from '../../deck-list-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { isSubscribed } from '../../../subscription/isSubscribed';
import * as Bowser from 'bowser';
import { GoogleLanguage } from '@vocably/model';
import { isExtensionInstalled } from '../../../isExtensionInstalled';

const browser = Bowser.getParser(window.navigator.userAgent);

const canInstallTheExtension = browser.satisfies({
  desktop: {
    chrome: '>1',
  },
});

@Component({
  selector: 'app-no-decks-page',
  templateUrl: './no-decks-page.component.html',
  styleUrls: ['./no-decks-page.component.scss'],
})
export class NoDecksPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public isSubscribed = false;

  public isInstalled = false;
  public proxyLanguage: GoogleLanguage = 'en';

  public canInstallTheExtension = canInstallTheExtension;

  constructor(
    deckListStore: DeckListStoreService,
    router: Router,
    route: ActivatedRoute,
    auth: AuthService
  ) {
    auth.userData$.pipe(takeUntil(this.destroy$)).subscribe((userData) => {
      this.isSubscribed = isSubscribed(userData);
    });

    if (deckListStore.decks$.value.length > 0) {
      router.navigate([deckListStore.decks$.value[0]], {
        relativeTo: route,
        replaceUrl: true,
      });
    }

    isExtensionInstalled.pipe(takeUntil(this.destroy$)).subscribe(async () => {
      this.isInstalled = true;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
