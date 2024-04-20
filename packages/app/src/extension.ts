import { isChrome, isIOSSafari, isMacSafari } from './browser';
import { environment } from './environments/environment';

export const canExtensionBeInstalled = isIOSSafari || isMacSafari || isChrome;

export const extensionId = isIOSSafari
  ? environment.iosSafariExtensionId
  : isMacSafari
  ? environment.safariExtensionId
  : environment.chromeExtensionId;

export const extensionInstallationUrl = isIOSSafari
  ? 'https://vocably.pro/ios-safari-extension.html'
  : isMacSafari
  ? 'https://apps.apple.com/app/id6464076425'
  : 'https://chrome.google.com/webstore/detail/vocably/baocigmmhhdemijfjnjdidbkfgpgogmb';
