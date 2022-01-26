import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subject, takeUntil, withLatestFrom } from 'rxjs';
import { DeckListStoreService } from './deck-list-store.service';
import { listLanguages } from '@vocably/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vocably-decks',
  templateUrl: './decks.component.html',
})
export class DecksComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  isLoading = true;

  constructor(
    decksListStore: DeckListStoreService,
    router: Router,
    route: ActivatedRoute
  ) {
    if (route.firstChild === null) {
      return;
    }

    from(listLanguages())
      .pipe(takeUntil(this.destroy$), withLatestFrom(route.firstChild.params))
      .subscribe(([result, params]) => {
        if (result.success === false) {
          throw new Error(result.reason);
        }

        this.isLoading = false;
        decksListStore.store(result.value);

        if (params['language'] === undefined) {
          router.navigate([result.value[0]], {
            relativeTo: route,
          });
        }
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
