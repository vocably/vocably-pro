import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeckListStoreService } from '../../deck-list-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { defer, map, retry, Subject, takeUntil } from 'rxjs';
import { isSubscribed } from '../../../subscription/isSubscribed';
import { pingExternal } from '@vocably/extension-messages';
import { environment } from '../../../../environments/environment';
import * as Bowser from 'bowser';
import { isEligibleForTrial, Language } from '@vocably/model';

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
  public isEligibleForTrial = false;
  public isTrialing = false;

  public isInstalled = false;

  public canInstallTheExtension = canInstallTheExtension;

  constructor(
    deckListStore: DeckListStoreService,
    router: Router,
    route: ActivatedRoute,
    auth: AuthService
  ) {
    auth.userData$.pipe(takeUntil(this.destroy$)).subscribe((userData) => {
      this.isEligibleForTrial = isEligibleForTrial(userData);
      this.isTrialing = userData.status === 'trialing';
      this.isSubscribed = isSubscribed(userData);
    });

    if (deckListStore.decks$.value.length > 0) {
      router.navigate([deckListStore.decks$.value[0]], {
        relativeTo: route,
        replaceUrl: true,
      });
    }

    defer(() => pingExternal(environment.chromeExtensionId))
      .pipe(
        map(() => true),
        retry({
          delay: 2000,
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.isInstalled = true;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  onLanguageSelect(language: Language) {
    console.log(language);
  }
}
