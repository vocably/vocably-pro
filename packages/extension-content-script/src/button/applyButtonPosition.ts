import { isTop, Position } from '../styling';

type Payload = {
  element: HTMLElement;
  position: Position;
  isTouchscreen: boolean;
};

export const applyButtonPosition = ({
  element,
  position,
  isTouchscreen,
}: Payload) => {
  element.style.position = isTouchscreen ? 'fixed' : 'absolute';
  element.style.left = `${position.left}px`;

  if (isTouchscreen) {
    element.style.bottom = `60px`;
    return;
  }

  if (isTop(position)) {
    element.style.top = `${position.top}px`;
  } else {
    element.style.top = `${position.bottom}px`;
  }
};
