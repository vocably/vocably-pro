import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeckListStoreService {
  // @ts-ignore
  private _decks$: BehaviorSubject<string[]>;

  public get decks$() {
    if (!this._decks$) {
      throw Error('Decks have not been stored yet.');
    }

    return this._decks$;
  }

  public store(decks: string[]) {
    if (!this._decks$) {
      this._decks$ = new BehaviorSubject<string[]>(decks);
    } else {
      this._decks$.next(decks);
    }
  }

  constructor() {}
}
