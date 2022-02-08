require('dotenv-flow').config();

module.exports = (on, config) => {
  config.env = {
    ...config.env,
    ...process.env,
  };

  config.baseUrl = process.env.BASE_URL;

  return config;
};
