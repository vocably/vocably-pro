import axios from 'axios';
import adapter from '@vespaiach/axios-fetch-adapter';
import { Auth } from '@aws-amplify/auth';
import { assignIn } from 'lodash-es';

export const restClient = axios.create({ adapter });

restClient.interceptors.request.use(async (config) => {
  return Auth.currentSession()
    .then((session) => {
      return assignIn(config, {
        headers: {
          Authorization: `Bearer ${session.getIdToken().getJwtToken()}`,
        },
      });
    })
    .catch(console.log);
});

export const configureClient = (options: Partial<typeof axios.defaults>) => {
  restClient.defaults = assignIn(restClient.defaults, options);
};
