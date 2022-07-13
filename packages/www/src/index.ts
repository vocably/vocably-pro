import './styles.scss';
import './bootstrap.scss';
import * as Bowser from 'bowser';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

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
