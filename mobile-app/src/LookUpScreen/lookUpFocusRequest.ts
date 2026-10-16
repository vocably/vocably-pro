// The LookUp tab requests the search input focus when it is pressed.
// The request stays pending until the LookUp screen is focused and consumes it,
// so returning to the screen any other way (e.g. closing a modal) never focuses the input.

let isRequested = false;
const listeners = new Set<() => void>();

export const requestLookUpFocus = () => {
  isRequested = true;
  listeners.forEach((listener) => listener());
};

export const consumeLookUpFocusRequest = (): boolean => {
  const wasRequested = isRequested;
  isRequested = false;
  return wasRequested;
};

export const onLookUpFocusRequest = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};
