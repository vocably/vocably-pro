import { tokenize } from '@vocably/sulna';
import {
  getContextFromHTMLElement,
  getContextFromSelection,
} from './getContext/getContextFromSelection';
import { isSelection } from './isSelection';

export const getContext = (anchor: Selection | HTMLElement): string => {
  let rawContext = '';
  if (isSelection(anchor)) {
    rawContext = getContextFromSelection(anchor);
  } else {
    rawContext = getContextFromHTMLElement(anchor);
  }

  return tokenize(rawContext).join(' ');
};
