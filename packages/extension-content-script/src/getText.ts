import { isSelection } from './isSelection';

export const getText = (anchor: Selection | HTMLElement): string => {
  if (isSelection(anchor)) {
    return anchor.toString();
  }

  return anchor.innerText;
};
