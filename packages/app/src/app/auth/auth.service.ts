import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { catchError, from, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  async login() {
    return Auth.federatedSignIn();
  }

  isLoggedIn(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser()).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
