/**
 * @format
 */

import { Notifications } from '@aws-amplify/notifications';
import { AWS_CONFIG_PROJECT_REGION, AWS_PINPOINT_PROJECT_ID } from '@env';
import { AppRegistry, LogBox } from 'react-native';
import 'react-native-gesture-handler';
import {
  name as appName,
  shareExtensionName as extensionName,
} from './app.json';
import App from './src/App';
import ShareIntentApp from './src/ShareIntent/ShareExtensionApp';
// We need this to make crud -> nanoid work in RN app
import * as Sentry from '@sentry/react-native';
import { Amplify } from 'aws-amplify';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { awsConfig } from './src/aws-config';
import { notificationsIdentifyUser } from './src/notificationsIdentifyUser';

Sentry.init({
  dsn: 'https://88ec70cfa6b68493c79646625c208280@o1191770.ingest.us.sentry.io/4507980535758848',
});

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

Amplify.configure(awsConfig);

Notifications.configure({
  ...awsConfig,
  Notifications: {
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
  notificationsIdentifyUser();
});

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(extensionName, () => ShareIntentApp);
