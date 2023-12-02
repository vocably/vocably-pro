import { config } from 'dotenv-flow';

export const getEnvironmentVariables = () => {
  config();

  return {
    definitions: Object.entries(process.env).map(([key, value]) => {
      return [`process.env.${key}`, value];
    }),
    stringified: Object.keys(process.env).reduce((env, key) => {
      env[`process.env.${key}`] = JSON.stringify(process.env[key]);
      return env;
    }, {}),
  };
};
