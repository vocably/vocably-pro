import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subject, switchMap, takeUntil, tap, timer } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-confirmation-page',
  templateUrl: './sign-in-success-page.component.html',
  styleUrls: ['./sign-in-success-page.component.scss'],
})
export class SignInSuccessPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public isLoading = true;
  public redirectingToSubscription = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    from(this.auth.isActive())
      .pipe(
        tap((isActive) => {
          this.isLoading = false;
        }),
        filter((isActive) => !isActive),
        tap(() => (this.redirectingToSubscription = true)),
        switchMap(() => timer(2000)),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.router.navigate(['/subscription']);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
