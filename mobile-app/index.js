/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import 'react-native-gesture-handler';
import {
  name as appName,
  shareExtensionName as extensionName,
} from './app.json';
import App from './src/App';
import ShareIntentApp from './src/ShareIntent/ShareExtensionApp';
// We need this to make crud -> nanoid work in RN app
import { Analytics } from '@aws-amplify/analytics';
import { Notifications } from '@aws-amplify/notifications';
import { AWS_CONFIG_PROJECT_REGION, AWS_PINPOINT_PROJECT_ID } from '@env';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { awsConfig } from './src/aws-config';
import { notificationsIdentifyUser } from './src/notificationsIdentifyUser';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

Notifications.configure({
  ...awsConfig,
  Notifications: {
    //@ts-ignore
    Push: {
      AWSPinpoint: {
        appId: AWS_PINPOINT_PROJECT_ID,
        region: AWS_CONFIG_PROJECT_REGION,
      },
    },
  },
});

Notifications.Push.enable();

Notifications.Push.onTokenReceived((token) => {
  console.log('The app received a new token. Re-identifying the user.');
  notificationsIdentifyUser();
});

Analytics.configure({
  ...awsConfig,
  appId: AWS_PINPOINT_PROJECT_ID,
  region: AWS_CONFIG_PROJECT_REGION,
});

Analytics.enable();

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(extensionName, () => ShareIntentApp);
