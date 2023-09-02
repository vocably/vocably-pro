import { pingExternal } from '@vocably/extension-messages';
import { defer, map, retry } from 'rxjs';
import { extensionId } from '../extension-id';

export const isExtensionInstalled = defer(() => pingExternal(extensionId)).pipe(
  map(() => true),
  retry({
    delay: 2000,
  })
);
