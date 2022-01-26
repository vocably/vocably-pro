import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { loadLanguageDeck } from '@vocably/api';
import { DeckListStoreService } from '../deck-list-store.service';
import { DeckStoreService } from '../deck-store.service';

@Component({
  selector: 'vocably-selected-deck',
  templateUrl: './selected-deck.component.html',
  styleUrls: ['./selected-deck.component.scss'],
})
export class SelectedDeckComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public isLoading = true;
  public language = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public deckListStore: DeckListStoreService,
    public deckStore: DeckStoreService
  ) {
    this.route.params
      .pipe(
        tap(() => (this.isLoading = true)),
        tap((params) => {
          this.language = params['language'];
        }),
        takeUntil(this.destroy$),
        switchMap((params) => {
          return from(loadLanguageDeck(params['language']));
        })
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
