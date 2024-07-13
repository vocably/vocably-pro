type BrowserEnv = typeof chrome | typeof browser;
type Offscreenable = Pick<typeof chrome, 'offscreen'>;

export let browserEnv: BrowserEnv;

if (typeof chrome !== 'undefined') {
  browserEnv = chrome;
} else if (typeof browser !== 'undefined') {
  browserEnv = browser;
}

export const hasOffscreen = (browserEnv: any): browserEnv is Offscreenable => {
  return !!browserEnv['offscreen'];
};
