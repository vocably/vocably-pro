import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { subscribe } from '../../paddle';
import { from, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { isActive } from '../../subscriptionStatus';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subscribe-page',
  templateUrl: './subscribe-page.component.html',
  styleUrls: ['./subscribe-page.component.scss'],
})
export class SubscribePageComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  private destroy$ = new Subject();
  public isLoading = true;
  public hasPaid = false;
  public authStateUpdatedStatus: 'waiting' | 'success' | 'error' = 'waiting';
  public isWaitingForSubscription = false;

  constructor(
    private authService: AuthService,
    router: Router,
    route: ActivatedRoute
  ) {
    this.authService.userData$.pipe(take(1)).subscribe((userData) => {
      if (isActive(userData)) {
        router.navigate(['manage'], { relativeTo: route });
      }
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    from(this.authService.userData$)
      .pipe(
        take(1),
        switchMap((userData) => {
          return subscribe({
            email: userData.email,
            targetClass: 'checkout-container',
            onSuccess: () => this.onSuccess(),
            passthrough: {
              username: userData.username,
            },
          });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((event) => {
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  onSuccess() {
    this.hasPaid = true;
    this.waitForSubscription();
  }

  waitForSubscription() {
    this.isWaitingForSubscription = true;
    this.authService.waitForSubscriptionHook$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.isWaitingForSubscription = false;
          this.authStateUpdatedStatus = 'success';
        },
        error: () => {
          this.isWaitingForSubscription = false;
          this.authStateUpdatedStatus = 'error';
        },
      });
  }
}
