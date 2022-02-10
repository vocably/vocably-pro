import { saveDeck } from './save-deck';
import { clearDecks } from './clear-decks';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

require('dotenv-flow').config();

const pluginConfig: Cypress.PluginConfig = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);

  on('task', {
    clearDecks,
    saveDeck,
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
