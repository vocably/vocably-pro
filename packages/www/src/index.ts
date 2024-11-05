import * as Bowser from 'bowser';
import './bootstrap.scss';
import './last-iphone';
import './styles.scss';

const browser = Bowser.getParser(window.navigator.userAgent);
const isAndroid = browser.is('android');
const isIos = browser.is('ios');

document.querySelectorAll('.hide-android').forEach((el) => {
  if (isAndroid) {
    el.classList.add('d-none');
  }
});

if (document.getElementById('automatically-download-mobile-app')) {
  const progress = document.getElementById('mobile-app-progress');
  const links = document.getElementById('mobile-app-links');

  if (isAndroid) {
    document.getElementById('mobile-app-ios-link').classList.add('d-none');
  } else if (isIos) {
    window.location.href =
      'https://apps.apple.com/us/app/vocably-pro-language-cards/id1641258757';
    document.getElementById('mobile-app-android-link').classList.add('d-none');
  }

  progress.classList.add('d-none');
  links.classList.remove('d-none');
}

if (
  browser.satisfies({ desktop: { chrome: '>90', edge: '>90', firefox: '>0' } })
) {
  document.querySelectorAll('.chrome-cta').forEach((el) => {
    el.classList.remove('d-none');
  });
} else if (browser.satisfies({ desktop: { safari: '>14' } })) {
  document.querySelectorAll('.safari-cta').forEach((el) => {
    el.classList.remove('d-none');
  });
} else {
  document.querySelectorAll('.cta-else').forEach((el) => {
    el.classList.remove('d-none');
  });
}

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  // @ts-ignore
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
