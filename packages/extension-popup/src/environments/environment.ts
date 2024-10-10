import {
  ExtensionSettings,
  getSettings,
  setSettings,
} from '@vocably/extension-messages';
import { merge } from 'lodash-es';
import { environmentLocal } from './environmentLocal';

let settings: ExtensionSettings = {
  showOnDoubleClick: true,
  autoPlay: true,
  hideSelectionButton: true,
};

const mockGetSettings: typeof getSettings = async () => {
  return settings;
};

const mockSetSettings: typeof setSettings = async (newSettings) => {
  settings = merge(settings, newSettings);
  return settings;
};

export const environment = merge(environmentLocal, {
  production: false,
  getSettings: mockGetSettings,
  setSettings: mockSetSettings,
});
