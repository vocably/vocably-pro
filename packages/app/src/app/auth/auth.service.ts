import { Injectable } from '@angular/core';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';
import { BehaviorSubject, catchError, from, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean | undefined>(undefined);

  constructor() {
    from(Auth.currentAuthenticatedUser())
      .pipe(
        map(() => true),
        catchError(() => of(false))
      )
      .subscribe((isLoggedIn) => this.isLoggedIn$.next(isLoggedIn));
  }

  async login() {
    return Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  }

  async logout() {
    return Auth.signOut({
      global: true,
    });
  }
}
