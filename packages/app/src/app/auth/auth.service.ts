import { Injectable } from '@angular/core';
import { mapUserAttributes, UserData } from '@vocably/model';
import {
  AuthUser,
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
  signInWithRedirect,
  signOut,
} from 'aws-amplify/auth';
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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new ReplaySubject<boolean>(1);
  currentUser$ = new ReplaySubject<AuthUser>(1);
  userData$ = new ReplaySubject<UserData>(1);

  fetchUserData$ = this.currentUser$.pipe(
    switchMap(async (user) => {
      return {
        username: user.username,
        attributes: await fetchUserAttributes(),
      };
    }),
    map(mapUserAttributes)
  );

  public waitForSubscriptionHook$ = this.fetchUserData$.pipe(
    tap((userData) => {
      this.userData$.next(userData);
    }),
    switchMap(() => {
      return this.refreshToken();
    }),
    take(1),
    retry({
      delay: 1000,
      count: 20,
    })
  );

  private refreshUserData$ = new Subject();

  constructor() {
    from(getCurrentUser())
      .pipe(catchError(() => of(false as const)))
      .subscribe((userOrFalse) => {
        this.isLoggedIn$.next(userOrFalse !== false);
        if (userOrFalse === false) {
          return;
        }

        this.currentUser$.next(userOrFalse);
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
    return signInWithRedirect();
  }

  async signOut() {
    localStorage.removeItem('onboardedLanguages');
    return signOut();
  }

  async refreshToken(): Promise<void> {
    await fetchAuthSession({ forceRefresh: true });
  }

  async isPaidGroup(): Promise<boolean> {
    const session = await fetchAuthSession().catch(() => null);
    const groups = session?.tokens?.accessToken?.payload['cognito:groups'];

    return Array.isArray(groups) && groups.includes('paid');
  }
}
