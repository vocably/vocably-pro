import { Injectable } from '@angular/core';
import {
  Auth,
  CognitoHostedUIIdentityProvider,
  CognitoUser,
} from '@aws-amplify/auth';
import {
  catchError,
  from,
  map,
  of,
  ReplaySubject,
  retry,
  Subject,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { SubscriptionStatus } from '@vocably/model';
import { canUpdateSubscription } from '../subscription/canUpdateSubscription';

export type UserData = {
  username: string;
  email: string;
  sub: string;
  status?: SubscriptionStatus;
  updateUrl?: string;
  cancelUrl?: string;
  nextBillDate?: string;
  unitPrice?: number;
  cancellationDate?: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new ReplaySubject<boolean>(1);
  currentUser$ = new ReplaySubject<CognitoUser>(1);
  userData$ = new ReplaySubject<UserData>(1);

  fetchUserData$ = this.currentUser$.pipe(
    switchMap(async (user) => {
      return {
        user,
        attributes: await Auth.userAttributes(user),
      };
    }),
    map(({ user, attributes }): UserData => {
      const email = attributes.find((a) => a.getName() === 'email');
      const sub = attributes.find((a) => a.getName() === 'sub');
      const status = attributes.find((a) => a.getName() === 'custom:status');
      const nextBillDate = attributes.find(
        (a) => a.getName() === 'custom:next_bill_date'
      );
      const unitPrice = attributes.find(
        (a) => a.getName() === 'custom:unit_price'
      );
      const updateUrl = attributes.find(
        (a) => a.getName() === 'custom:update_url'
      );
      const cancelUrl = attributes.find(
        (a) => a.getName() === 'custom:cancel_url'
      );

      if (!email || !sub) {
        throw Error('Can find email and sub in user data.');
      }

      return {
        username: user.getUsername(),
        email: email.getValue(),
        sub: sub.getValue(),
        status: status && (status.getValue() as SubscriptionStatus),
        updateUrl: updateUrl && updateUrl.getValue(),
        cancelUrl: cancelUrl && cancelUrl.getValue(),
        nextBillDate: nextBillDate && nextBillDate.getValue(),
        unitPrice: unitPrice && parseFloat(unitPrice.getValue()),
      };
    })
  );

  public waitForSubscriptionHook$ = this.fetchUserData$.pipe(
    tap((userData) => {
      if (!canUpdateSubscription(userData)) {
        throw Error('The user attributes have not been updated yet.');
      }

      this.userData$.next(userData);
    }),
    take(1),
    retry({
      delay: 1000,
      count: 5,
    })
  );

  private refreshUserData$ = new Subject();

  constructor() {
    from(Auth.currentAuthenticatedUser())
      .pipe(catchError(() => of(false)))
      .subscribe((userOrFalse) => {
        this.isLoggedIn$.next(userOrFalse !== false);
        if (userOrFalse !== false) {
          this.currentUser$.next(userOrFalse);
        }
      });

    const refreshUserData$ = this.fetchUserData$.pipe(
      tap((userData) => {
        this.userData$.next(userData);
      })
    );

    this.refreshUserData$.pipe(switchMap(() => refreshUserData$)).subscribe();
    refreshUserData$.subscribe();
  }

  async signIn() {
    return Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  }

  async signOut() {
    return Auth.signOut();
  }

  refreshUserData() {
    this.refreshUserData$.next(null);
  }
}
