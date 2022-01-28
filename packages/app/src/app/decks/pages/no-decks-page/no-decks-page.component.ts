import { Component, OnInit } from '@angular/core';
import { DeckListStoreService } from '../../deck-list-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vocably-no-decks-page',
  templateUrl: './no-decks-page.component.html',
  styleUrls: ['./no-decks-page.component.scss'],
})
export class NoDecksPageComponent implements OnInit {
  constructor(
    deckListStore: DeckListStoreService,
    router: Router,
    route: ActivatedRoute
  ) {
    if (deckListStore.decks$.value.length > 0) {
      router.navigate([deckListStore.decks$.value[0]], {
        relativeTo: route,
      });
    }
  }

  ngOnInit(): void {}
}
