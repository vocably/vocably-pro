import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Linking } from 'react-native';
export const urlOpener = async (url: string, redirectUrl: string) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.close();
      await InAppBrowser.openAuth(url, redirectUrl, {
        showTitle: false,
        enableUrlBarHiding: true,
        enableDefaultShare: false,
        ephemeralWebSession: false,
      }).then((response) => {
        if (response.type === 'success' && response.url) {
          Linking.openURL(response.url);
        }
      });
    }
  } catch (e) {}
};
