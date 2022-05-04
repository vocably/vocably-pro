import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {
  isActive,
  isCancelled,
  isUnsubscribed,
} from '../subscription/subscriptionStatus';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  @Input() mini = false;
  @Input() title = '';

  isActive = isActive;
  isCancelled = isCancelled;
  isUnsubscribed = isUnsubscribed;

  isLoggedIn: boolean | null = null;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isLoggedIn$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  async signOut() {
    await this.auth.signOut();
  }

  isExpired(date: Date | undefined): boolean {
    if (date === undefined) {
      return true;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return today.getTime() > date.getTime();
  }
}
