import * as Bowser from 'bowser';

export const isIosSafari = Bowser.getParser(
  window.navigator.userAgent
).satisfies({
  mobile: {
    safari: '>1',
  },
  tablet: {
    safari: '>1',
  },
});
