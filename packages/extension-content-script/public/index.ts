import { registerContentScript } from '../src/index';

registerContentScript({
  isLoggedIn: () => Promise.resolve(true),
}).then();
