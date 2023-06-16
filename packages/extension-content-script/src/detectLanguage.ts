import { GoogleLanguage, isGoogleLanguage } from '@vocably/model';

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
  selection: Selection
): GoogleLanguage | undefined => {
  return getNodeLanguage(selection.anchorNode);
};
