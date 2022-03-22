import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { subscribe } from '../../paddle';
import { from, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { AuthService, UserData } from '../../../auth/auth.service';
import { canUpdateSubscription } from '../../canUpdateSubscription';

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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    from(this.authService.userData$)
      .pipe(
        take(1),
        switchMap((userData) => {
          return subscribe({
            email: userData.email,
            targetClass: 'checkout-container',
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
