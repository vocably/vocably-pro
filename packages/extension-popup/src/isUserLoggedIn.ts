import { distinctUntilChanged, Observable, switchMap, timer } from 'rxjs';
import { environment } from './environments/environment';

export const isUserLoggedIn$: Observable<boolean> = timer(0, 2000).pipe(
  switchMap(() => environment.isLoggedIn().catch(() => false)),
  distinctUntilChanged()
);
