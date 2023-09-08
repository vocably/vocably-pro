import { GoogleLanguage, isGoogleLanguage } from '@vocably/model';
import { isSelection } from './isSelection';

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

export const detectLanguage = (
  anchor: Selection | HTMLElement
): GoogleLanguage | undefined => {
  if (isSelection(anchor)) {
    return getNodeLanguage(anchor.anchorNode);
  }

  return getNodeLanguage(anchor);
};
