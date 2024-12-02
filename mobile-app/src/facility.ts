import { Facility } from '@vocably/model';
import { Platform } from 'react-native';

export const facility: Facility =
  Platform.OS === 'android' ? 'android-app' : 'ios-app';
