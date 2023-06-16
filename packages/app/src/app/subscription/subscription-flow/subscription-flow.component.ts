import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '@vocably/model';
import { Subject, take, takeUntil } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { SubscriptionProduct } from '../paddle';
import { isActive } from '../subscriptionStatus';

@Component({
  selector: 'app-subscription-flow',
  templateUrl: './subscription-flow.component.html',
  styleUrls: ['./subscription-flow.component.scss'],
})
export class SubscriptionFlowComponent implements OnInit, OnDestroy {
  public userData: UserData | null = null;
  public selectedProduct: SubscriptionProduct | null = null;
  public stage: 'product' | 'form' | 'paid' = 'product';
  public authStateUpdatedStatus: 'waiting' | 'success' | 'error' = 'waiting';
  public isWaitingForSubscription = false;

  private destroy$ = new Subject();

  constructor(
    private authService: AuthService,
    router: Router,
    route: ActivatedRoute
  ) {
    this.authService.userData$.pipe(take(1)).subscribe((userData) => {
      if (isActive(userData)) {
        router.navigate(['manage'], { relativeTo: route, replaceUrl: true });
      }

      this.userData = userData;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  onSuccessfulPayment() {
    this.stage = 'paid';
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
