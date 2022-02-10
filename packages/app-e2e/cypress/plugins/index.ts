const { clearDecks } = require('./clear-decks');
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');
require('dotenv-flow').config();

const pluginConfig: Cypress.PluginConfig = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);

  on('task', {
    clearDecks,
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
