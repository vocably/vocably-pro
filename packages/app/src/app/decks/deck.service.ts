import { Injectable } from '@angular/core';
import { DeckStoreService } from './deck-store.service';
import { Card, CardItem, Result } from '@vocably/model';
import { makeDelete, makeRestore, makeUpdate } from '@vocably/crud';
import { from, map, Observable, of, tap } from 'rxjs';
import { saveLanguageDeck } from '@vocably/api';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor(private deckStore: DeckStoreService) {}

  public restore(cardItem: CardItem): Observable<Result<true>> {
    const deck = this.deckStore.deck$.value;
    const restoreResult = makeRestore(deck.cards)(cardItem);

    if (!restoreResult.success) {
      return of(restoreResult);
    }

    return from(saveLanguageDeck(deck)).pipe(
      map((saveResult) => {
        if (!saveResult.success) {
          return saveResult;
        } else {
          return restoreResult;
        }
      }),
      tap((result) => result.success && this.deckStore.store(deck))
    );
  }

  public update(id: string, data: Partial<Card>): Observable<Result<CardItem>> {
    const deck = this.deckStore.deck$.value;
    const collectionUpdateResult = makeUpdate(deck.cards)(id, data);
    if (!collectionUpdateResult.success) {
      return of(collectionUpdateResult);
    }

    return from(saveLanguageDeck(deck)).pipe(
      map((saveResult) => {
        if (!saveResult.success) {
          return saveResult;
        } else {
          return collectionUpdateResult;
        }
      }),
      tap((result) => result.success && this.deckStore.store(deck))
    );
  }

  public delete(id: string): Observable<Result<true>> {
    const deck = this.deckStore.deck$.value;
    const collectionDeleteResult = makeDelete(deck.cards)(id);

    if (!collectionDeleteResult.success) {
      return of(collectionDeleteResult);
    }

    return from(saveLanguageDeck(deck)).pipe(
      map((saveResult) => {
        if (!saveResult.success) {
          return saveResult;
        } else {
          return collectionDeleteResult;
        }
      }),
      tap((result) => result.success && this.deckStore.store(deck))
    );
  }
}
