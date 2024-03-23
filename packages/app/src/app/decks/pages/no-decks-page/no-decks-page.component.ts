import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { isIOSSafari } from '../../../../browser';
import {
  canExtensionBeInstalled,
  extensionInstallationUrl,
} from '../../../../extension';
import { isExtensionInstalled } from '../../../isExtensionInstalled';
import { DeckListStoreService } from '../../deck-list-store.service';

@Component({
  selector: 'app-no-decks-page',
  templateUrl: './no-decks-page.component.html',
  styleUrls: ['./no-decks-page.component.scss'],
})
export class NoDecksPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public extensionCanBeInstalled = canExtensionBeInstalled;
  public extensionIsInstalled: boolean | undefined = undefined;
  public extensionInstallUrl = extensionInstallationUrl;
  public isIOSSafari = isIOSSafari;

  constructor(
    deckListStore: DeckListStoreService,
    router: Router,
    route: ActivatedRoute
  ) {
    if (deckListStore.decks$.value.length > 0) {
      router.navigate([deckListStore.decks$.value[0]], {
        relativeTo: route,
        replaceUrl: true,
      });
    }

    isExtensionInstalled
      .pipe(takeUntil(this.destroy$))
      .subscribe((isInstalled) => {
        this.extensionIsInstalled = isInstalled;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
