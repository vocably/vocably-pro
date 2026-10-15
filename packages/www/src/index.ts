import { initializePaddle } from '@paddle/paddle-js';
import '@sneas/telephone/iphone-16-max';
import '@sneas/telephone/pixel-9-pro';
import { isGoogleLanguage } from '@vocably/model';
import * as Bowser from 'bowser';
import { track } from './analytics';
import './bootstrap.scss';
import './styles.scss';
import { searchConfig } from './constants';
import { getPreferredTargetLanguage } from './preferredLanguages';
import { words } from './search/words';
import { isLoggedIn, onSignedIn } from './user';

const browser = Bowser.getParser(window.navigator.userAgent);
const isAndroid = browser.is('android');
const isIos = browser.is('ios');
const isChrome = browser.is('chrome') && !isAndroid && !isIos;
const isSafari = browser.is('safari') && !isAndroid && !isIos;
const isEdge = browser.is('microsoft edge') && !isAndroid && !isIos;

const applyCssVariables = async ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  if (isLoggedIn) {
    document.documentElement.style.setProperty('--anonymous-display', 'block');
    document.documentElement.style.setProperty('--user-display', 'none');
  } else {
    document.documentElement.style.setProperty('--anonymous-display', 'none');
    document.documentElement.style.setProperty('--user-display', 'block');
  }
};

isLoggedIn().then((r) =>
  applyCssVariables({ isLoggedIn: r.success && r.value })
);

onSignedIn(() => applyCssVariables({ isLoggedIn: true }));

//@ts-ignore
window.trackEvent = track;

document.querySelectorAll('.show-other').forEach((el) => {
  if (isChrome || isEdge || isSafari || isAndroid || isIos) {
    el.remove();
  } else {
    el.classList.remove('show-other');
  }
});

document.querySelectorAll('.show-any').forEach((el) => {
  if (!(isChrome || isEdge || isSafari || isAndroid || isIos)) {
    el.remove();
  } else {
    el.classList.remove('show-any');
  }
});

document.querySelectorAll('.show-chrome').forEach((el) => {
  if (!isChrome) {
    el.remove();
  } else {
    el.classList.remove('show-chrome');
  }
});

document.querySelectorAll('.show-safari').forEach((el) => {
  if (!isSafari) {
    el.remove();
  } else {
    el.classList.remove('show-safari');
  }
});

document.querySelectorAll('.show-edge').forEach((el) => {
  if (!isEdge) {
    el.remove();
  } else {
    el.classList.remove('show-edge');
  }
});

document.querySelectorAll('.hide-edge').forEach((el) => {
  if (isEdge) {
    el.remove();
  } else {
    el.classList.remove('hide-edge');
  }
});

document.querySelectorAll('.hide-chrome').forEach((el) => {
  if (isChrome) {
    el.remove();
  } else {
    el.classList.remove('hide-chrome');
  }
});

document.querySelectorAll('.hide-safari').forEach((el) => {
  if (isSafari) {
    el.remove();
  } else {
    el.classList.remove('hide-safari');
  }
});

document.querySelectorAll('.hide-ios').forEach((el) => {
  if (isIos) {
    el.remove();
  } else {
    el.classList.remove('hide-ios');
  }
});

document.querySelectorAll('.show-ios').forEach((el) => {
  if (!isIos) {
    el.remove();
  } else {
    el.classList.remove('show-ios');
  }
});

document.querySelectorAll('.hide-android').forEach((el) => {
  if (isAndroid) {
    el.remove();
  } else {
    el.classList.remove('hide-android');
  }
});

document.querySelectorAll('.hide-other').forEach((el) => {
  if (!(isChrome || isEdge || isSafari || isAndroid || isIos)) {
    el.remove();
  } else {
    el.classList.remove('hide-other');
  }
});

document.querySelectorAll('.show-android').forEach((el) => {
  if (!isAndroid) {
    el.remove();
  } else {
    el.classList.remove('show-android');
  }
});

const downloadMobileApp = document.getElementById(
  'automatically-download-mobile-app'
);

if (downloadMobileApp) {
  const progress = document.getElementById('mobile-app-progress');
  const links = document.getElementById('mobile-app-links');

  if (isAndroid) {
    document.getElementById('mobile-app-ios-link').classList.add('d-none');
  } else if (isIos) {
    if (downloadMobileApp.dataset.redirect !== undefined) {
      window.location.href =
        'https://apps.apple.com/app/vocably-pro-language-cards/id1641258757';
    }
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

tooltipTriggerList.map(function (tooltipTriggerEl) {
  // @ts-ignore
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Search form

const getSourceLanguage = () => {
  if (isGoogleLanguage(window['searchFormSourceLanguage'])) {
    return window['searchFormSourceLanguage'];
  }

  const params = new URLSearchParams(window.location.search);
  if (params.has('l') && isGoogleLanguage(params.get('l') ?? '')) {
    return params.get('l');
  }
  return (
    localStorage.getItem(searchConfig.sourceLanguageLocalStorageKey) ?? 'en'
  );
};

document
  .querySelectorAll('#searchForm')
  .forEach((searchForm: HTMLFormElement) => {
    const sourceLanguageSelect = searchForm.querySelector(
      '[name=sourceLanguage]'
    ) as HTMLSelectElement;
    const targetLanguageSelect = searchForm.querySelector(
      '[name=targetLanguage]'
    ) as HTMLSelectElement;

    sourceLanguageSelect.value = getSourceLanguage();
    let targetLanguage: string = getPreferredTargetLanguage();
    if (targetLanguage === 'en-GB' && sourceLanguageSelect.value === 'en') {
      targetLanguage = 'en';
    }
    targetLanguageSelect.value = targetLanguage;
    const textInput = searchForm.querySelector(
      '[name=text]'
    ) as HTMLInputElement;

    const updatePlaceholder = () => {
      if (window.innerWidth < 600) {
        textInput.placeholder = 'Search...';
        return;
      }

      if (sourceLanguageSelect.value === targetLanguageSelect.value) {
        textInput.placeholder = 'Search for any word...';
        return;
      }

      textInput.placeholder = 'Search for any word or phrase...';
    };

    updatePlaceholder();

    searchForm
      .querySelectorAll('.language-selector-wrapper')
      .forEach((languageSelectorWrapper) => {
        const label = languageSelectorWrapper.querySelector('.label');
        const select = languageSelectorWrapper.querySelector('select');

        const setLabel = () => {
          label.innerHTML = select.value.slice(0, 2);
        };

        select.addEventListener('change', () => {
          setLabel();
          updatePlaceholder();
        });

        setLabel();
      });

    const setUpExample = () => {
      const exampleContainer = searchForm.querySelector('.search-form-hint');

      if (!exampleContainer) {
        return;
      }

      const sourceExampleButton = searchForm.querySelector(
        '[data-search-source-example]'
      ) as HTMLButtonElement;
      const translationExampleContainer = searchForm.querySelector(
        `[data-search-relevant-target]`
      );
      const targetExampleButton = searchForm.querySelector(
        '[data-search-target-example]'
      ) as HTMLButtonElement;

      const onLanguageChange = () => {
        if (
          !isGoogleLanguage(sourceLanguageSelect.value) ||
          !isGoogleLanguage(targetLanguageSelect.value)
        ) {
          return;
        }
        const isRelevantTranslationLanguage =
          sourceLanguageSelect.value !== targetLanguageSelect.value;
        sourceExampleButton.innerHTML = words[sourceLanguageSelect.value];
        targetExampleButton.innerHTML = words[targetLanguageSelect.value];
        if (!isRelevantTranslationLanguage) {
          translationExampleContainer.classList.add('d-none');
          targetExampleButton.disabled = true;
        } else {
          translationExampleContainer.classList.remove('d-none');
          targetExampleButton.disabled = false;
        }
        exampleContainer.classList.remove('invisible');
      };

      onLanguageChange();
      sourceLanguageSelect.addEventListener('change', onLanguageChange);
      targetLanguageSelect.addEventListener('change', onLanguageChange);

      const onExampleClick = (e: Event) => {
        const word = e.target['innerHTML'];
        if (!word) {
          return;
        }

        textInput.value = word;
        searchForm.submit();
      };

      sourceExampleButton.addEventListener('click', onExampleClick);
      targetExampleButton.addEventListener('click', onExampleClick);
    };

    setUpExample();
  });

initializePaddle({
  token: window['paddleClientSideToken'],
  environment: window['paddleClientSideToken'].startsWith('test')
    ? 'sandbox'
    : 'production',
  debug: window['paddleClientSideToken'].startsWith('test'),
}).then(async (Paddle) => {
  const { data } = await Paddle.PricePreview({
    items: [
      {
        priceId: window['paddleMonthlyPriceId'],
        quantity: 1,
      },
      {
        priceId: window['paddleYearlyPriceId'],
        quantity: 1,
      },
    ],
  });

  const {
    details: {
      lineItems: [monthlyItem, yearlyItem],
    },
  } = data;

  document
    .querySelectorAll('[data-monthly-price]')
    .forEach(
      (element) => (element.innerHTML = monthlyItem.formattedTotals.total)
    );

  document
    .querySelectorAll('[data-yearly-price]')
    .forEach(
      (element) => (element.innerHTML = yearlyItem.formattedTotals.total)
    );

  const monthlyTotal = Number(monthlyItem.totals.total);
  const yearlyTotal = Number(yearlyItem.totals.total);
  const savings = Math.floor((1 - yearlyTotal / (monthlyTotal * 12)) * 100);

  if (savings > 0) {
    document
      .querySelectorAll<HTMLElement>('[data-yearly-savings]')
      .forEach((element) => {
        element.textContent = `Save ${savings}%`;
        element.hidden = false;
      });
  }
});

// Selecting any word on the website opens the extension's popup. Its code is
// only fetched once the page has settled, as a chunk of its own.
const loadContentScript = () =>
  import('./contentScript')
    .then(({ registerWebsiteContentScript }) => registerWebsiteContentScript())
    .catch((e) => console.error('Unable to load the content script', e));

if ('requestIdleCallback' in window) {
  requestIdleCallback(loadContentScript);
} else {
  setTimeout(loadContentScript, 1000);
}
