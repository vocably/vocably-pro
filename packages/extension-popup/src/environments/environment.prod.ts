import {
  addCard,
  analyze,
  attachTag,
  deleteTag,
  detachTag,
  getInternalSourceLanguage,
  getSettings,
  isLoggedIn,
  playAudioPronunciation,
  removeCard,
  setSettings,
  updateTag,
} from '@vocably/extension-messages';
import { merge } from 'lodash-es';
import { environmentLocal } from './environmentLocal';

export const environment = merge(environmentLocal, {
  production: true,
  analyze: analyze,
  addCard: addCard,
  attachTag: attachTag,
  detachTag: detachTag,
  deleteTag: deleteTag,
  updateTag: updateTag,
  removeCard: removeCard,
  playAudioPronunciation: playAudioPronunciation,
  getSettings: getSettings,
  setSettings: setSettings,
  isLoggedIn: isLoggedIn,
  getInternalSourceLanguage: getInternalSourceLanguage,
});
