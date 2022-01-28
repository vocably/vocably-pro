import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subject, takeUntil, tap } from 'rxjs';
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
    from(listLanguages())
      .pipe(
        takeUntil(this.destroy$),
        tap(() => (this.isLoading = true))
      )
      .subscribe((result) => {
        if (result.success === false) {
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
