import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'vocably-decks',
  templateUrl: './decks.component.html',
})
export class DecksComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data
      .pipe(takeUntil(this.destroy$), take(1))
      .subscribe((data) => {
        const decks: string[] = data['decks'];

        if (decks.length > 0) {
          this.router.navigate([decks[0]], {
            relativeTo: this.route,
          });
        }
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
