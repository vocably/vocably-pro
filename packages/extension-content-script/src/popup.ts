import {
  applyPosition,
  applyTransform,
  Position,
  setupTransform,
  applyMaxZIndex,
} from './styling';
import { setContents, TearDown } from './popup/contents';

let popup: HTMLElement;
let resizeObserver: ResizeObserver;
let tearDownContents: TearDown;

const calculatePosition = (): Position => {
  const selection = window.document.getSelection();
  const rect = selection.getRangeAt(0).getBoundingClientRect();

  const left = window.scrollX + rect.left + rect.width / 2;

  if (rect.bottom < window.innerHeight / 2) {
    return {
      left,
      top: window.scrollY + rect.bottom,
    };
  } else {
    return {
      left,
      bottom: window.scrollY + rect.top,
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

export const createPopup = async (phrase: string) => {
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
    source: phrase,
  });

  const position = calculatePosition();
  applyPosition(popup, position);
  setupTransform(popup);
  show(popup);

  resizeObserver = new ResizeObserver(() => {
    applyTransform(popup, position);
  });
  resizeObserver.observe(popup);
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
};
