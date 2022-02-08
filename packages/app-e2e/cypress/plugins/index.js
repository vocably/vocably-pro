require('dotenv').config();

module.exports = (on, config) => {
  config.env = {
    ...config.env,
    ...process.env,
  };
  return config;
};
