import {
  analyze,
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

const mockAnalyze: typeof analyze = async () => {
  await timeout(2000);
  return {
    success: true,
    value: {
      cards: [
        {
          data: {
            language: 'nl',
            source: 'gemaakt',
            g: 'f',
            ipa: 'ɣəˈmaːkt',
            example: 'Bij een gemaakte glimlach lachen onze ogen niet mee.',
            definition: 'als iets niet natuurlijk is of gebeurt',
            translation: 'made',
            partOfSpeech: 'adjective',
            interval: 0,
            repetition: 0,
            eFactor: 2.5,
            dueDate: 1646179200000,
            tags: [],
          },
        },
        {
          id: 'Oqewl',
          created: 1646242718636,
          data: {
            language: 'nl',
            source: 'maken',
            g: 'f',
            ipa: 'ˈmaːkə(n)',
            example: '* winst maken\n* De klok is weer gemaakt.',
            definition:
              '* (iets dat nog niet bestond) laten ontstaan\n* (iets dat kapot is) zorgen dat het weer heel is',
            translation: 'to make',
            partOfSpeech: 'verb',
            interval: 0,
            repetition: 0,
            eFactor: 2.5,
            dueDate: 1646179200000,
            tags: [],
          },
        },
      ],
      source: 'gemaakt',
      translation: {
        source: 'gemaakt',
        sourceLanguage: 'nl',
        target: 'made',
        targetLanguage: 'en',
      },
      tags: [],
    },
  };
};

export const environment = merge(environmentLocal, {
  production: false,
  analyze: mockAnalyze,
  getSettings: mockGetSettings,
  setSettings: mockSetSettings,
  isLoggedIn: mockIsLoggedIn,
  getInternalSourceLanguage: mockGetInternalSourceLanguage,
});
