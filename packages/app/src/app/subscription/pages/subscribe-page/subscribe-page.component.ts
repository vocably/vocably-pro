import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { checkout } from '../../paddle';
import { Auth } from '@aws-amplify/auth';
import { from, Subject, switchMap, takeUntil } from 'rxjs';

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

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    from(Auth.currentUserInfo())
      .pipe(
        switchMap(({ attributes: { email } }) => {
          return checkout({
            email,
            targetClass: 'checkout-container',
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
