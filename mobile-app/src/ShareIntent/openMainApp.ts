import { Linking } from 'react-native';

const MAIN_APP_URL_SCHEME = 'vocably-pro://';

export const openMainApp = () => {
  Linking.canOpenURL(MAIN_APP_URL_SCHEME)
    .then((supported) => {
      if (supported) {
        Linking.openURL(MAIN_APP_URL_SCHEME);
      } else {
        console.log(`Can't handle url: ${MAIN_APP_URL_SCHEME}`);
      }
    })
    .catch((err) => console.error('An error occurred', err));
};
