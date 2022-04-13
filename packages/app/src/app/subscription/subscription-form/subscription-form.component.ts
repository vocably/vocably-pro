import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { subscribe, SubscriptionProduct } from '../paddle';
import { startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { UserData } from '../../auth/auth.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
})
export class SubscriptionFormComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() product!: SubscriptionProduct;
  @Input() userData!: UserData;

  @Output() success = new EventEmitter();
  @Output() back = new EventEmitter();

  public isClosed = false;
  public openCheckout$ = new Subject();

  private destroy$ = new Subject();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.openCheckout$
      .pipe(
        startWith(null),
        tap(() => {
          this.isClosed = false;
        }),
        switchMap(() => {
          return subscribe({
            productId: this.product.id,
            email: this.userData.email,
            targetClass: 'checkout-container',
            onSuccess: () => this.success.emit(),
            onClose: () => {
              this.isClosed = true;
            },
            passthrough: {
              username: this.userData.username,
            },
          });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
