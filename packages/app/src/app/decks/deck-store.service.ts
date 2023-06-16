import { Injectable } from '@angular/core';
import { LanguageDeck } from '@vocably/model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeckStoreService {
  // @ts-ignore
  private _deck$: BehaviorSubject<LanguageDeck>;

  public get deck$() {
    if (!this._deck$) {
      throw Error('Decks have not been stored yet.');
    }

    return this._deck$;
  }

  public store(deck: LanguageDeck) {
    if (!this._deck$) {
      this._deck$ = new BehaviorSubject(deck);
    } else {
      this._deck$.next(deck);
    }
  }

  constructor() {}
}
