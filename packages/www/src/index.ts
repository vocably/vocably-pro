import './styles.scss';
import './bootstrap.scss';
import * as Bowser from 'bowser';

const browser = Bowser.getParser(window.navigator.userAgent);

const canInstallTheExtension = browser.satisfies({
  desktop: {
    chrome: '>1',
  },
});

if (canInstallTheExtension !== true) {
  document
    .querySelectorAll('.browser-warning')
    .forEach((element) => element.classList.remove('d-none'));
}
