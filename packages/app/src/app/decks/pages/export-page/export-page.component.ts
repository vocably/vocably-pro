import { Component, OnDestroy, OnInit } from '@angular/core';
import { byDate, CardItem } from '@vocably/model';
import { Subject, takeUntil } from 'rxjs';
import { LoaderService } from '../../../components/loader.service';
import { DeckStoreService } from '../../deck-store.service';

@Component({
  selector: 'app-export-page',
  templateUrl: './export-page.component.html',
  styleUrls: ['./export-page.component.scss'],
})
export class ExportPageComponent implements OnInit, OnDestroy {
  public cards: CardItem[] = [];

  private destroy$ = new Subject();

  constructor(
    public deckStore: DeckStoreService,
    public loader: LoaderService
  ) {
    this.deckStore.deck$.pipe(takeUntil(this.destroy$)).subscribe((deck) => {
      this.cards = deck.cards.sort(byDate);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
