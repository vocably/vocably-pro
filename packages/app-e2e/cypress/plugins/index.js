const { clearDecks } = require('./clear-decks');
require('dotenv-flow').config();

module.exports = (on, config) => {
  on('task', {
    clearDecks,
  });

  config.env = {
    ...config.env,
    ...process.env,
  };

  config.baseUrl = process.env.BASE_URL;

  return config;
};
