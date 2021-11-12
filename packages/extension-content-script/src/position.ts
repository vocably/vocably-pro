type PositionAbove = {
  left: number;
  bottom: number;
};

type PositionBelow = {
  left: number;
  top: number;
};

export type Position = PositionAbove | PositionBelow;

const isTop = (popupPosition: Position): popupPosition is PositionBelow => {
  return Object.prototype.hasOwnProperty.call(popupPosition, 'top');
};

export const applyPosition = (element: HTMLElement, position: Position) => {
  element.style.position = 'absolute';
  element.style.left = `${position.left}px`;
  if (isTop(position)) {
    element.style.bottom = 'auto';
    element.style.top = `${position.top}px`;
  } else {
    element.style.top = 'auto';
    element.style.bottom = `${position.bottom}px`;
  }
};
