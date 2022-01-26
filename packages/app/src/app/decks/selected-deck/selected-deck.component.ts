import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { loadLanguageDeck } from '@vocably/api';

@Component({
  selector: 'vocably-selected-deck',
  templateUrl: './selected-deck.component.html',
  styleUrls: ['./selected-deck.component.scss'],
})
export class SelectedDeckComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public isLoading = true;

  constructor(private route: ActivatedRoute) {
    this.route.params
      .pipe(
        tap(() => (this.isLoading = true)),
        takeUntil(this.destroy$),
        switchMap((params) => {
          return from(loadLanguageDeck(params['language']));
        })
      )
      .subscribe((result) => {
        this.isLoading = false;
        console.log(result);
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
