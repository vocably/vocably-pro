import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { checkout } from '../../paddle';
import { Auth } from '@aws-amplify/auth';
import { from, Subject, switchMap, takeUntil } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';

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
        switchMap(({ username, email }) => {
          return checkout({
            email,
            targetClass: 'checkout-container',
            passthrough: {
              username,
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
