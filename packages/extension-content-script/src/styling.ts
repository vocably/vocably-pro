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
    element.style.top = `${position.top}px`;
  } else {
    element.style.top = `${position.bottom}px`;
  }
};

export const setupTransform = (element: HTMLElement) => {
  element.style.setProperty('--horizontal-displacement', '0px');
  element.style.setProperty('--translate-y', '0');
  element.style.transform = `translate(calc(-50% + var(--horizontal-displacement)), var(--translate-y))`;
};

const calculateDisplacement = (
  element: HTMLElement,
  position: Position
): number => {
  const rect = element.getBoundingClientRect();
  if (position.left - rect.width / 2 < window.scrollX) {
    return window.scrollX + (rect.width / 2 - position.left);
  }

  if (position.left + rect.width / 2 > window.innerWidth + window.scrollX) {
    return (
      window.innerWidth + window.scrollX - (position.left + rect.width / 2)
    );
  }

  return 0;
};

export const applyTransform = (element: HTMLElement, position: Position) => {
  const displacement = calculateDisplacement(element, position);
  if (displacement !== 0) {
    const animationDuration = 200;
    const originalTransition = element.style.transition;
    element.style.transition = `${
      originalTransition ? `${originalTransition}, ` : ''
    }transform ${animationDuration}ms`;
    setTimeout(() => {
      element.style.transition = originalTransition;
    }, animationDuration);
  }
  element.style.setProperty('--horizontal-displacement', `${displacement}px`);

  if (isTop(position)) {
    element.style.setProperty('--translate-y', '0');
  } else {
    element.style.setProperty('--translate-y', '-100%');
  }
};

export const applyMaxZIndex = (element: HTMLElement) => {
  element.style.zIndex = '2147483647';
};
