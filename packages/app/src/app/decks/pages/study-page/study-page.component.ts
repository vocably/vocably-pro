import { Component, OnInit } from '@angular/core';
import { DeckStoreService } from '../../deck-store.service';
import { slice } from '@vocably/srs';
import { CardItem } from '@vocably/model';

@Component({
  selector: 'vocably-study-page',
  templateUrl: './study-page.component.html',
  styleUrls: ['./study-page.component.scss'],
})
export class StudyPageComponent implements OnInit {
  public cards: CardItem[];
  constructor(deckStore: DeckStoreService) {
    this.cards = slice(new Date(), 10, deckStore.deck$.value.cards);
  }

  ngOnInit(): void {}
}
