import { browser } from './browser';
import { environment } from './environments/environment';

export const extensionId = browser.satisfies({
  macos: {
    safari: '>10.1',
  },
})
  ? environment.safariExtensionId
  : browser.satisfies({
      ios: {
        safari: '>0',
      },
    })
  ? environment.iosSafariExtensionId
  : environment.chromeExtensionId;
