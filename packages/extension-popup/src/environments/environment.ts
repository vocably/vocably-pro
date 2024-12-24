import {
  ExtensionSettings,
  getInternalSourceLanguage,
  getSettings,
  isLoggedIn,
  setSettings,
} from '@vocably/extension-messages';
import { merge } from 'lodash-es';
import { environmentLocal } from './environmentLocal';

let settings: ExtensionSettings = {
  showOnDoubleClick: true,
  autoPlay: true,
  hideSelectionButton: true,
};

const timeout = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const mockGetSettings: typeof getSettings = async () => {
  return settings;
};

const mockSetSettings: typeof setSettings = async (newSettings) => {
  settings = merge(settings, newSettings);
  return settings;
};

const mockIsLoggedIn: typeof isLoggedIn = async () => {
  await timeout(500);
  const params = new URLSearchParams(window.location.search);
  return !params.has('notLoggedIn');
};

// @ts-ignore
const mockGetInternalSourceLanguage: typeof getInternalSourceLanguage =
  async () => {
    await timeout(500);
    const params = new URLSearchParams(window.location.search);
    return params.has('noInternalSourceLanguage') ? null : 'en';
  };

export const environment = merge(environmentLocal, {
  production: false,
  getSettings: mockGetSettings,
  setSettings: mockSetSettings,
  isLoggedIn: mockIsLoggedIn,
  getInternalSourceLanguage: mockGetInternalSourceLanguage,
});
