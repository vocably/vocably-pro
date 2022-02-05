import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  filter,
  from,
  map,
  startWith,
  Subject,
  switchMap,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs';
import { loadLanguageDeck } from '@vocably/api';
import { DeckListStoreService } from '../deck-list-store.service';
import { DeckStoreService } from '../deck-store.service';
import { RouterParamsService } from '../../router-params.service';

@Component({
  selector: 'vocably-selected-deck',
  templateUrl: './selected-deck.component.html',
  styleUrls: ['./selected-deck.component.scss'],
})
export class SelectedDeckComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public isLoading = true;
  public language = '';
  clearScreen = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public deckListStore: DeckListStoreService,
    public deckStore: DeckStoreService,
    routerParams: RouterParamsService
  ) {
    routerParams.data$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.clearScreen = data['clearScreen'] ?? false;
    });

    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((event) => event instanceof NavigationEnd),
        startWith(null),
        withLatestFrom(this.route.params),
        tap(() => console.log('params changed')),
        map(([_, params]) => params),
        tap(() => (this.isLoading = true)),
        tap((params) => {
          this.language = params['language'];
        }),
        switchMap((params) => from(loadLanguageDeck(params['language'])))
      )
      .subscribe((result) => {
        if (result.success === false) {
          throw new Error(result.reason);
        }
        this.isLoading = false;
        this.deckStore.store(result.value);
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  changeLanguage(language: string) {
    this.router.navigate(['deck', language]);
  }
}
