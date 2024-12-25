import {
  addCard,
  analyze,
  getInternalSourceLanguage,
  getSettings,
  isLoggedIn,
  removeCard,
  setSettings,
} from '@vocably/extension-messages';
import { merge } from 'lodash-es';
import { environmentLocal } from './environmentLocal';

export const environment = merge(environmentLocal, {
  production: true,
  analyze: analyze,
  addCard: addCard,
  removeCard: removeCard,
  getSettings: getSettings,
  setSettings: setSettings,
  isLoggedIn: isLoggedIn,
  getInternalSourceLanguage: getInternalSourceLanguage,
});
