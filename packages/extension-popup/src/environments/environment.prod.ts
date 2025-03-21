import {
  addCard,
  analyze,
  attachTag,
  deleteTag,
  detachTag,
  getAudioPronunciation,
  getInternalSourceLanguage,
  getLanguagePairs,
  getSettings,
  isLoggedIn,
  removeCard,
  setSettings,
  updateCard,
  updateTag,
} from '@vocably/extension-messages';
import { merge } from 'lodash-es';
import { environmentLocal } from './environmentLocal';

export const environment = merge(environmentLocal, {
  production: true,
  updateCard: updateCard,
  analyze: analyze,
  addCard: addCard,
  attachTag: attachTag,
  detachTag: detachTag,
  deleteTag: deleteTag,
  updateTag: updateTag,
  removeCard: removeCard,
  getAudioPronunciation: getAudioPronunciation,
  getSettings: getSettings,
  setSettings: setSettings,
  isLoggedIn: isLoggedIn,
  getInternalSourceLanguage: getInternalSourceLanguage,
  getLanguagePairs: getLanguagePairs,
});
