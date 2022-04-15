require('dotenv-flow').config();
import { saveDeck } from './save-deck';
import { clearDecks } from './clear-decks';
import { resetUserCustomAttributes } from './reset-user-custom-attributes';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

const pluginConfig: Cypress.PluginConfig = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);

  on('task', {
    clearDecks,
    saveDeck,
    resetUserCustomAttributes,
  });

  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--force-color-profile=srgb');
    }
  });

  config.env = {
    ...config.env,
    ...process.env,
  };

  config.baseUrl = process.env.BASE_URL;

  return config;
};

export default pluginConfig;
