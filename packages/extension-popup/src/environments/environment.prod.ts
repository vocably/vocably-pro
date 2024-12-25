import {
  analyze,
  getInternalSourceLanguage,
  getSettings,
  isLoggedIn,
  setSettings,
} from '@vocably/extension-messages';
import { merge } from 'lodash-es';
import { environmentLocal } from './environmentLocal';

export const environment = merge(environmentLocal, {
  production: true,
  analyze: analyze,
  getSettings: getSettings,
  setSettings: setSettings,
  isLoggedIn: isLoggedIn,
  getInternalSourceLanguage: getInternalSourceLanguage,
});
