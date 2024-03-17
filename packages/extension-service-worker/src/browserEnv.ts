export let browserEnv: typeof chrome | typeof browser;

if (typeof chrome !== 'undefined') {
  browserEnv = chrome;
} else if (typeof browser !== 'undefined') {
  browserEnv = browser;
}
