import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { from, map, Observable } from 'rxjs';
import { listLanguages } from '@vocably/api';

@Injectable({
  providedIn: 'root',
})
export class DecksResolverService implements Resolve<string[]> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string[]> {
    return from(listLanguages()).pipe(
      map((loadResult) => {
        if (loadResult.success === true) {
          return loadResult.value;
        }

        throw loadResult;
      })
    );
  }
}
