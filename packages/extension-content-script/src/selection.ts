import { MAX_SYMBOLS_TO_BE_TRANSLATED } from '@vocably/model';

export const isValidSelection = (
  selection: Selection | null
): selection is Selection => {
  if (selection === null) {
    return false;
  }

  if (selection.rangeCount === 0) {
    return false;
  }

  const clientRect = selection.getRangeAt(0).getBoundingClientRect();
  if (clientRect.height === 0 || clientRect.width === 0) {
    return false;
  }

  const text = selection.toString().trim();

  if (text === '') {
    return false;
  }

  if (text.length > MAX_SYMBOLS_TO_BE_TRANSLATED) {
    return false;
  }

  return true;
};
