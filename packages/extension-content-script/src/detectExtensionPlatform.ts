import * as Bowser from 'bowser';

type ExtensionPlatform = {
  url: string;
  name: string;
  platform: 'chromeExtension' | 'safariExtension';
};

export const browser = Bowser.getParser(window.navigator.userAgent);

export const detectExtensionPlatform = (): ExtensionPlatform => {
  return browser.satisfies({
    macos: {
      safari: '>10.1',
    },
  })
    ? {
        url: 'https://apps.apple.com/app/id6464076425',
        name: 'App Store',
        platform: 'safariExtension',
      }
    : {
        url: 'https://chrome.google.com/webstore/detail/vocably/baocigmmhhdemijfjnjdidbkfgpgogmb',
        name: 'Chrome Web Store',
        platform: 'chromeExtension',
      };
};
