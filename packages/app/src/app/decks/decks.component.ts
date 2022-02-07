import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { DeckListStoreService } from './deck-list-store.service';
import { listLanguages } from '@vocably/api';

@Component({
  selector: 'vocably-decks',
  templateUrl: './decks.component.html',
})
export class DecksComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  isLoading = true;

  constructor(decksListStore: DeckListStoreService) {
    decksListStore.reload$
      .pipe(
        takeUntil(this.destroy$),
        startWith(null),
        tap(() => {
          this.isLoading = true;
        }),
        switchMap(() => from(listLanguages()))
      )
      .subscribe((result) => {
        if (!result.success) {
          throw new Error(result.reason);
        }

        this.isLoading = false;
        decksListStore.store(result.value);
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
