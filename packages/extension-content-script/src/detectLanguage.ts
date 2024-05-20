import { GoogleLanguage, isGoogleLanguage } from '@vocably/model';
import { api } from './api';
import { isSelection } from './isSelection';
import location = chrome.contentSettings.location;

const getNodeLanguage = (
  node: Node | null | undefined
): GoogleLanguage | undefined => {
  if (!node) {
    return undefined;
  }

  // @ts-ignore
  const nodeLang = (node.lang ?? '').substring(0, 2);

  if (isGoogleLanguage(nodeLang)) {
    return nodeLang;
  }

  return getNodeLanguage(node.parentNode);
};

export const detectLanguage = async (
  anchor: Selection | HTMLElement
): Promise<GoogleLanguage | undefined> => {
  const locationLanguage = await api.getLocationLanguage(
    window.location.toString()
  );
  if (locationLanguage) {
    return locationLanguage;
  }

  if (isSelection(anchor)) {
    return getNodeLanguage(anchor.anchorNode);
  }

  return getNodeLanguage(anchor);
};
