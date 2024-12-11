import { Injectable } from '@angular/core';
import { GoogleLanguage } from '@vocably/model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeckListStoreService {
  // @ts-ignore
  private _decks$: BehaviorSubject<GoogleLanguage[]>;

  public reload$ = new Subject();

  public get decks$() {
    if (!this._decks$) {
      throw Error('Decks have not been stored yet.');
    }

    return this._decks$;
  }

  public store(decks: GoogleLanguage[]) {
    if (!this._decks$) {
      this._decks$ = new BehaviorSubject<GoogleLanguage[]>(decks);
    } else {
      this._decks$.next(decks);
    }
  }

  constructor() {}
}
