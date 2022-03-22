import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { checkout } from '../../paddle';
import { from, Subject, switchMap, take, takeUntil } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { canUpdateSubscription } from '../../canUpdateSubscription';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss'],
})
export class SubscriptionPageComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  private destroy$ = new Subject();

  public isLoading = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    from(this.authService.userData$)
      .pipe(
        take(1),
        switchMap((userData) => {
          return checkout({
            email: userData.email,
            targetClass: 'checkout-container',
            override: canUpdateSubscription(userData)
              ? userData.updateUrl
              : undefined,
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
}
