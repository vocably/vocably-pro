require('dotenv-flow').config();
import { saveDeck } from './save-deck';
import { clearDecks } from './clear-decks';
import { resetUserCustomAttributes } from './reset-user-custom-attributes';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';
import { resolve } from 'path';

const pluginConfig: Cypress.PluginConfig = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);

  config.env = {
    ...config.env,
    ...process.env,
  };

  config.baseUrl = process.env.BASE_URL;

  on('task', {
    clearDecks,
    saveDeck,
    resetUserCustomAttributes,
  });

  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--force-color-profile=srgb');

      if (config.env.EXTENSION) {
        launchOptions.extensions.push(
          resolve(__dirname, '../../../extension/dist')
        );
      }
    }

    return launchOptions;
  });

  return config;
};

export default pluginConfig;
