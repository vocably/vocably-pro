/// <reference types="chrome" />
/// <reference types="chrome" />
/// <reference types="firefox-webext-browser" />
declare type BrowserEnv = typeof chrome | typeof browser;
declare type Offscreenable = Pick<typeof chrome, 'offscreen'>;
export declare let browserEnv: BrowserEnv;
export declare const hasOffscreen: (browserEnv: any) => browserEnv is Offscreenable;
export {};
