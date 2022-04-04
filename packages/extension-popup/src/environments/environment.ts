import { merge } from 'lodash-es';
import { environmentLocal } from './environmentLocal';

export const environment = merge(environmentLocal, {
  production: false,
});
