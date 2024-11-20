import { GoogleLanguage } from '@vocably/model';
import { browserEnv } from './browserEnv';

const locationLanguages: Record<string, GoogleLanguage> = {};

// Load
(async () => {
  const { locationLanguages: storedLocationLanguages } =
    await browserEnv.storage.sync.get(['locationLanguages']);

  if (storedLocationLanguages) {
    Object.assign(locationLanguages, storedLocationLanguages);
  }
})();

export const getLocationLanguage = (url: string): GoogleLanguage | null => {
  const domain = new URL(url).hostname;

  if (locationLanguages[domain]) {
    return locationLanguages[domain];
  }

  return null;
};

export const storeLocationLanguage = async (
  url: string,
  language: GoogleLanguage
) => {
  locationLanguages[new URL(url).hostname] = language;
  await browserEnv.storage.sync.set({ locationLanguages });
};
