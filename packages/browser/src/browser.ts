import * as Bowser from 'bowser';

export const browser = Bowser.getParser(window.navigator.userAgent);
