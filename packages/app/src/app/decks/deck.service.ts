import { Injectable } from '@angular/core';
import { DeckStoreService } from './deck-store.service';
import { SrsCard, CardItem, Result } from '@vocably/model';
import { makeDelete, makeRestore, makeUpdate } from '@vocably/crud';
import { from, map, Observable, of, switchMap, take, tap } from 'rxjs';
import { loadLanguageDeck, saveLanguageDeck } from '@vocably/api';

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

  public update(
    id: string,
    data: Partial<SrsCard>
  ): Observable<Result<CardItem>> {
    return this.deckStore.deck$.pipe(
      take(1),
      map((deck) => deck.language),
      switchMap((language) => loadLanguageDeck(language)),
      tap((loadDeckResult) => {
        if (loadDeckResult.success) {
          this.deckStore.store(loadDeckResult.value);
        }
      }),
      switchMap(async (loadDeckResult) => {
        if (loadDeckResult.success === false) {
          return loadDeckResult;
        }

        const updateResult = makeUpdate(loadDeckResult.value.cards)(id, data);
        if (updateResult.success === false) {
          return updateResult;
        }

        const saveResult = await saveLanguageDeck(loadDeckResult.value);

        if (saveResult.success === false) {
          return saveResult;
        }

        return updateResult;
      })
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
