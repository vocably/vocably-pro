import { pingExternal } from '@vocably/extension-messages';
import { defer, map, retry, tap } from 'rxjs';
import { extensionId } from '../extension-id';

export const isExtensionInstalled = defer(() => pingExternal(extensionId)).pipe(
  tap((result) => {
    if (result !== 'pong') {
      throw new Error('Extension is not installed');
    }
  }),
  map(() => true),
  retry({
    delay: 2000,
  })
);
