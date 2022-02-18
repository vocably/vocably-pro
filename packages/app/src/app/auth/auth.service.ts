import { Injectable } from '@angular/core';
import { Auth, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { catchError, from, map, of, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new ReplaySubject<boolean>(1);

  constructor() {
    from(Auth.currentAuthenticatedUser())
      .pipe(
        map(() => true),
        catchError(() => of(false))
      )
      .subscribe((isLoggedIn) => this.isLoggedIn$.next(isLoggedIn));
  }

  async signIn() {
    return Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  }

  async signOut() {
    return Auth.signOut({
      global: true,
    });
  }
}
