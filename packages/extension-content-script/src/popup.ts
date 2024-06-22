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

type PopupStackItem = {
  popup: HTMLElement;
  resizeObserver: ResizeObserver;
  tearDownContents: TearDown;
};

const popupStack: PopupStackItem[] = [];

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

type PopupOptions = {
  text: string;
  context?: string;
  detectedLanguage?: GoogleLanguage;
  globalRect: GlobalRect;
  isTouchscreen: boolean;
};

export const createPopup = async (options: PopupOptions) => {
  const popup = document.createElement('vocably-popup');
  applyInitialStyles(popup);
  document.body.appendChild(popup);

  popup.addEventListener('close', () => {
    destroyPopup(popup);
  });

  const tearDownContents = await setContents({
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

  const resizeObserver = new ResizeObserver(() => {
    requestAnimationFrame(() => applyTransform(popup, position));
  });
  resizeObserver.observe(popup);

  popupStack.push({ popup, resizeObserver, tearDownContents });
  setTimeout(() => addGlobalEventListeners(), 100);
};

export const destroyPopup = (popupToDestroy: HTMLElement) => {
  const stackItemIndex = popupStack.findIndex(
    (item) => item.popup === popupToDestroy
  );

  if (stackItemIndex === -1) {
    return;
  }

  const { popup, resizeObserver, tearDownContents } =
    popupStack[stackItemIndex];

  tearDownContents();
  resizeObserver.unobserve(popup);
  resizeObserver.disconnect();
  popup.remove();

  popupStack.splice(stackItemIndex, 1);
};

export const destroyAllPopups = () => {
  while (popupStack.length > 0) {
    destroyPopup(popupStack[0].popup);
  }

  removeGlobalEventListeners();
};

const addGlobalEventListeners = () => {
  if (popupStack.length > 1) {
    return;
  }

  document.addEventListener('click', destroyOnGlobalClick);
  document.addEventListener('keydown', destroyOnSpace);
};

const removeGlobalEventListeners = () => {
  document.removeEventListener('keydown', destroyOnSpace);
  document.removeEventListener('click', destroyOnGlobalClick);
};

const destroyOnSpace = (e: KeyboardEvent) => {
  if (e.code === 'Space') {
    destroyAllPopups();
  }
};

const isPopupElement = (verifiedElement: HTMLElement): boolean => {
  if (verifiedElement.tagName === 'VOCABLY-POPUP') {
    return true;
  }

  if (verifiedElement.parentElement) {
    return isPopupElement(verifiedElement.parentElement);
  }

  return false;
};

const destroyOnGlobalClick = (e: MouseEvent) => {
  if (!e.target) {
    return;
  }

  const isClickOnPopup = isPopupElement(e.target as HTMLElement);

  if (!isClickOnPopup) {
    destroyAllPopups();
  }
};
