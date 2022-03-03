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

  if (!(selection.getRangeAt(0).commonAncestorContainer instanceof Text)) {
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
