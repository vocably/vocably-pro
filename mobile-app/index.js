/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import App from './src/App';
import { name as appName } from './app.json';
import { LogBox } from 'react-native';
// We need this to make crud -> nanoid work in RN app
import 'react-native-get-random-values';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

AppRegistry.registerComponent(appName, () => App);
