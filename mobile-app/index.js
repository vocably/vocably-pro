/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { name as appName } from './app.json';
import App from './src/App';
import Share from './src/Share';
// We need this to make crud -> nanoid work in RN app
import 'react-native-get-random-values';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent("VocablyProShare", () => Share);