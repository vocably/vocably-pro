import type { ComponentType } from 'react';
import { AppStoreHeader } from './AppStoreHeader';
import { AppStoreIcon } from './AppStoreIcon';
import { AppStoreSearchResults } from './AppStoreSearchResults';
import { IPad13 } from './IPad13';
import { IPhone65 } from './IPhone65';
import { PlayFeatureGraphic } from './PlayFeatureGraphic';
import { PlayIcon } from './PlayIcon';
import { PlayPhone } from './PlayPhone';
import { PlayTablet10 } from './PlayTablet10';

// One component per format id in src/formats.
export const devices: Record<string, ComponentType> = {
  'ios-iphone-6.5': IPhone65,
  'ios-ipad-13': IPad13,
  'ios-icon': AppStoreIcon,
  'ios-header': AppStoreHeader,
  'ios-search-results': AppStoreSearchResults,
  'play-phone': PlayPhone,
  'play-tablet-10': PlayTablet10,
  'play-feature-graphic': PlayFeatureGraphic,
  'play-icon': PlayIcon,
};
