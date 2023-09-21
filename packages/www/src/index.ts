import * as Bowser from 'bowser';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './bootstrap.scss';
import './styles.scss';

const browser = Bowser.getParser(window.navigator.userAgent);

const promoVideo = document.getElementById('promo-video');
if (promoVideo) {
  const isAutoplay = browser.is('desktop');
  videojs(promoVideo, {
    autoplay: isAutoplay,
    muted: isAutoplay,
    controlBar: {
      children: [
        'playToggle',
        'volumePanel',
        'currentTimeDisplay',
        'timeDivider',
        'durationDisplay',
        'progressControl',
        'liveDisplay',
        'remainingTimeDisplay',
        'customControlSpacer',
        'playbackRateMenuButton',
        'chaptersButton',
        'captionsButton',
        'subCapsButton',
        'audioTrackButton',
      ],
    },
  }).ready(function () {
    const player = this;

    // @ts-ignore
    const trackSettings = player.textTrackSettings;
    trackSettings.setValues({
      backgroundOpacity: '0.5',
      fontPercent: 1.5,
    });
    trackSettings.updateDisplay();

    if (isAutoplay) {
      player.controlBar.hide();
    }

    player.on('mouseenter', () => {
      if (isAutoplay) {
        player.controlBar.show();
      }
    });
  });
}

if (document.getElementById('automatically-download-mobile-app')) {
  const isAndroid = browser.is('android');
  const isIos = browser.is('ios');

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

if (browser.satisfies({ desktop: { chrome: '>90', edge: '>90', firefox: '>0' } })) {
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
