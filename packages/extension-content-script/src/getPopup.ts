export const getPopup = (): HTMLElement => {
  const popupId = 'translation-extension-popup';
  let popup = document.getElementById(popupId);

  if (popup) {
    return popup;
  }

  popup = document.createElement('vocably-popup');
  popup.id = popupId;
  document.body.appendChild(popup);
  return popup;
};

type PopupAboveRect = {
  left: number;
  bottom: number;
};

type PopupUnderRect = {
  left: number;
  top: number;
};

type PopupPosition = PopupAboveRect | PopupUnderRect;

export const calculatePopupPosition = (rect: DOMRect): PopupPosition => {
  const left = window.scrollX + rect.left + rect.width / 2;

  if (rect.bottom < window.innerHeight / 2) {
    return {
      left,
      top: window.scrollY + rect.bottom,
    };
  } else {
    return {
      left,
      bottom: window.innerHeight - rect.top - window.scrollY,
    };
  }
};

export const isTop = (
  popupPosition: PopupPosition
): popupPosition is PopupUnderRect => {
  return Object.prototype.hasOwnProperty.call(popupPosition, 'top');
};
