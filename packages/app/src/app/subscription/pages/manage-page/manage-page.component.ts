import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '@vocably/model';
import { from, Subject, take, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { update } from '../../paddle';
import { isActive, isCancelled } from '../../subscriptionStatus';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss'],
})
export class ManagePageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public userData: UserData | false = false;
  public hasBeenSuccessfullyCancelled = false;

  isActive = isActive;
  isCancelled = isCancelled;

  constructor(
    private authService: AuthService,
    router: Router,
    route: ActivatedRoute
  ) {
    this.authService.userData$.pipe(take(1)).subscribe((userData) => {
      if (!isActive(userData)) {
        router.navigate(['../'], { relativeTo: route, replaceUrl: true });
      }
    });
  }

  ngOnInit(): void {
    from(this.authService.userData$)
      .pipe(take(1))
      .subscribe((userData) => {
        this.userData = userData;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  async updatePaymentMethod(userData: UserData) {
    if (!userData.updateUrl || !userData.productId) {
      return;
    }

    await update({
      productId: userData.productId,
      email: userData.email,
      passthrough: {
        username: userData.username,
      },
      override: userData.updateUrl,
    });
  }

  async cancelSubscription(userData: UserData) {
    if (!userData.cancelUrl || !userData.productId) {
      return;
    }

    await update({
      productId: userData.productId,
      email: userData.email,
      passthrough: {
        username: userData.username,
      },
      override: userData.cancelUrl,
      onSuccess: () => {
        this.hasBeenSuccessfullyCancelled = true;
        this.authService.waitForCancelHook$
          .pipe(takeUntil(this.destroy$))
          .subscribe();
      },
    });
  }
}
