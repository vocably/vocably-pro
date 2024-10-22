import { distinctUntilChanged, Observable, switchMap, timer } from 'rxjs';
import { environment } from './environments/environment';

export const needsOnboarding$: Observable<boolean> = timer(0, 2000).pipe(
  switchMap(() =>
    environment
      .getInternalSourceLanguage()
      .catch(() => null)
      .then((res) => res === null)
  ),
  distinctUntilChanged()
);
