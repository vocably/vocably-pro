import { Injectable } from '@angular/core';
import { DeckStoreService } from './deck-store.service';
import { Card, CardItem, Result } from '@vocably/model';
import { makeUpdate } from '@vocably/crud';
import { from, map, Observable, of } from 'rxjs';
import { saveLanguageDeck } from '@vocably/api';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor(private deckStore: DeckStoreService) {}

  public update(id: string, data: Partial<Card>): Observable<Result<CardItem>> {
    const deck = this.deckStore.deck$.value;
    const collectionUpdateResult = makeUpdate(deck.cards)(id, data);
    if (collectionUpdateResult.success === false) {
      return of(collectionUpdateResult);
    }

    return from(saveLanguageDeck(deck)).pipe(
      map((saveResult) => {
        if (saveResult.success === false) {
          return saveResult;
        } else {
          return collectionUpdateResult;
        }
      })
    );
  }
}
