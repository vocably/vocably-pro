import { pingExternal } from '@vocably/extension-messages';
import { defer, map, retry } from 'rxjs';
import { environment } from '../environments/environment';

export const isExtensionInstalled = defer(() =>
  pingExternal(environment.chromeExtensionId)
).pipe(
  map(() => true),
  retry({
    delay: 2000,
  })
);
