import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CognitoAuthGuard implements CanActivate {
  constructor(private auth: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.isLoggedIn$.pipe(
      tap(async (loggedIn) => {
        if (!loggedIn) {
          await this.router.navigate(['login']);
        }
      })
    );
  }
}
