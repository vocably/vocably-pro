import { Platform } from 'react-native';

export const mobilePlatform: 'ios' | 'android' =
  Platform.OS === 'ios' ? 'ios' : 'android';

export const mobileStoreName =
  Platform.OS === 'ios' ? 'App Store' : 'Google Play';
export const mobileStoreUrl =
  Platform.OS === 'ios'
    ? 'https://apps.apple.com/app/vocably-pro-language-cards/id1641258757'
    : 'https://play.google.com/store/apps/details?id=com.vocablypro';
