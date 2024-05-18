import { GoogleLanguage } from '@vocably/model';
import { setContents, TearDown } from './popup/contents';
import { GlobalRect } from './position';
import {
  applyMaxZIndex,
  applyPosition,
  applyTransform,
  isTop,
  Position,
  setupTransform,
} from './styling';

let popup: HTMLElement;
let resizeObserver: ResizeObserver;
let tearDownContents: TearDown;

const calculatePosition = (
  globalRect: GlobalRect,
  isTouchscreen: boolean
): Position => {
  const left = globalRect.left + globalRect.width / 2;

  const top = globalRect.top - window.scrollY;
  const bottom = top + globalRect.height;
  const selectionContextMenuHeight = Math.ceil(
    50 / window.visualViewport.scale
  );

  if (bottom < window.innerHeight / 2) {
    return {
      left,
      top:
        window.scrollY +
        bottom +
        (isTouchscreen ? selectionContextMenuHeight : 0),
    };
  } else {
    return {
      left,
      bottom:
        window.scrollY + top - (isTouchscreen ? selectionContextMenuHeight : 0),
    };
  }
};

const calculateMaxHeight = (position: Position): string => {
  if (isTop(position)) {
    return `${window.scrollY - position.top + window.innerHeight}px`;
  } else {
    return `${position.bottom - window.scrollY}px`;
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
  context?: string;
  detectedLanguage?: GoogleLanguage;
  globalRect: GlobalRect;
  isTouchscreen: boolean;
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
    detectedLanguage: options.detectedLanguage,
    context: options.context,
  });

  const position = calculatePosition(options.globalRect, options.isTouchscreen);

  popup.style.setProperty('--max-height', calculateMaxHeight(position));
  popup.style.setProperty('--max-width', `${window.visualViewport.width}px`);
  applyPosition(popup, position);
  setupTransform(popup);
  show(popup);

  resizeObserver = new ResizeObserver(() => {
    requestAnimationFrame(() => applyTransform(popup, position));
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
