import { Component, OnDestroy, OnInit } from '@angular/core';
import { getUserMetadata } from '@vocably/api';
import { byDate, CardItem, Result, UserMetadata } from '@vocably/model';
import { Subject, takeUntil } from 'rxjs';
import { DeckStoreService } from '../../deck-store.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public cardItems: CardItem[] = [];

  constructor(public deckStore: DeckStoreService) {}

  ngOnInit(): void {
    this.deckStore.deck$.pipe(takeUntil(this.destroy$)).subscribe((deck) => {
      this.cardItems = deck.cards.sort(byDate);
    });

    getUserMetadata().then((metadata: Result<UserMetadata>) => {
      if (metadata.success === false) {
        return;
      }

      console.log(metadata);

      // saveUserMetadata({
      //   ...metadata.value,
      //   rate: {
      //     ...metadata.value.rate,
      //     ios: {
      //       response: 'later',
      //       isoDate: new Date().toISOString(),
      //     },
      //   },
      // });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
