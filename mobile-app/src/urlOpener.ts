import { Linking } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

export const urlOpenerOptions = {
  ephemeralWebSession: false,
};

export const urlOpener = async (url: string, redirectUrl: string) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.close();
      await InAppBrowser.openAuth(url, redirectUrl, {
        showTitle: false,
        enableUrlBarHiding: true,
        enableDefaultShare: false,
        ephemeralWebSession: urlOpenerOptions.ephemeralWebSession,
      }).then((response) => {
        urlOpenerOptions.ephemeralWebSession = false;
        if (response.type === 'success' && response.url) {
          Linking.openURL(response.url);
        }
      });
    }
  } catch (e) {}
};
