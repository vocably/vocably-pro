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
import { mapUserAttributes, UserData } from '@vocably/model';
import { isActive, isCancelled } from '../subscription/subscriptionStatus';
import { get } from 'lodash-es';

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
    map(mapUserAttributes)
  );

  public waitForSubscriptionHook$ = this.fetchUserData$.pipe(
    tap((userData) => {
      if (!isActive(userData)) {
        throw Error('The user attributes have not been updated yet.');
      }

      this.userData$.next(userData);
    }),
    switchMap(() => {
      return this.refreshToken();
    }),
    take(1),
    retry({
      delay: 1000,
      count: 5,
    })
  );

  public waitForCancelHook$ = this.fetchUserData$.pipe(
    tap((userData) => {
      if (!isCancelled(userData)) {
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

  async refreshToken(): Promise<void> {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    const currentSession = await Auth.currentSession();
    return new Promise((resolve, reject) => {
      cognitoUser.refreshSession(
        currentSession.getRefreshToken(),
        (error: any) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });
  }

  async isActive(): Promise<boolean> {
    const user = await Auth.currentAuthenticatedUser().catch(() => false);

    if (!user) {
      return false;
    }

    return get(
      user,
      'signInUserSession.accessToken.payload.cognito:groups',
      []
    ).includes('paid');
  }
}
