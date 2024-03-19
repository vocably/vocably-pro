import { pingExternal } from '@vocably/extension-messages';
import { distinctUntilChanged, Observable, switchMap, timer } from 'rxjs';
import { extensionId } from '../extension-id';

export const isExtensionInstalled: Observable<boolean> = timer(0, 2000).pipe(
  switchMap(() =>
    pingExternal(extensionId)
      .catch(() => undefined)
      .then((result) => result === 'pong')
  ),
  distinctUntilChanged()
);
