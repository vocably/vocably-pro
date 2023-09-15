import { GoogleLanguage } from '@vocably/model';
import { setContents, TearDown } from './popup/contents';
import { GlobalRect } from './position';
import {
  applyMaxZIndex,
  applyPosition,
  applyTransform,
  Position,
  setupTransform,
} from './styling';

let popup: HTMLElement;
let resizeObserver: ResizeObserver;
let tearDownContents: TearDown;

const calculatePosition = (globalRect: GlobalRect): Position => {
  const left = globalRect.left + globalRect.width / 2;

  const top = globalRect.top - window.scrollY;
  const bottom = top + globalRect.height;

  if (bottom < window.innerHeight / 2) {
    return {
      left,
      top: window.scrollY + bottom,
    };
  } else {
    return {
      left,
      bottom: window.scrollY + top,
    };
  }
};

const applyInitialStyles = (popup: HTMLElement) => {
  applyMaxZIndex(popup);
  popup.style.opacity = '0';
  popup.style.transition = 'opacity 100ms';
};

const show = (popup: HTMLElement) => {
  popup.style.opacity = '1';
};

const destroyOnSpace = (e: KeyboardEvent) => {
  if (e.code === 'Space') {
    destroyPopup();
  }
};

type PopupOptions = {
  text: string;
  language?: GoogleLanguage;
  globalRect: GlobalRect;
};

export const createPopup = async (options: PopupOptions) => {
  destroyPopup();

  popup = document.createElement('vocably-popup');
  applyInitialStyles(popup);
  document.body.appendChild(popup);

  popup.addEventListener('mousedown', (event) => {
    event.stopPropagation();
  });

  popup.addEventListener('mouseup', (event) => {
    event.stopPropagation();
  });

  popup.addEventListener('close', () => {
    destroyPopup();
  });

  tearDownContents = await setContents({
    popup,
    source: options.text,
    detectedLanguage: options.language,
  });

  const position = calculatePosition(options.globalRect);
  applyPosition(popup, position);
  setupTransform(popup);
  show(popup);

  resizeObserver = new ResizeObserver(() => {
    applyTransform(popup, position);
  });
  resizeObserver.observe(popup);

  document.addEventListener('keydown', destroyOnSpace);
};

export const destroyPopup = () => {
  if (popup) {
    popup.remove();
  }

  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }

  if (tearDownContents) {
    tearDownContents();
    tearDownContents = null;
  }

  document.removeEventListener('keydown', destroyOnSpace);
};
