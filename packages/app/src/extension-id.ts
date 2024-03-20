import { browser, isIOS } from './browser';
import { environment } from './environments/environment';

export const extensionId =
  isIOS() &&
  browser.satisfies({
    safari: '>10.1',
  })
    ? environment.iosSafariExtensionId
    : browser.satisfies({
        macos: {
          safari: '>10.1',
        },
      })
    ? environment.safariExtensionId
    : environment.chromeExtensionId;
