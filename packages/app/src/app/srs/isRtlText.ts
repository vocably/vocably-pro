// Hebrew, Arabic, Syriac, Thaana, NKo, Samaritan, Mandaic, Arabic Extended
// and Hebrew/Arabic presentation forms.
const RTL_CHAR = /[֐-ࣿיִ-﷿ﹰ-﻿]/;
// ASCII digits, whitespace and punctuation, Latin-1 punctuation and
// General Punctuation block. These don't define text direction.
const NEUTRAL_CHAR = /[\u0000-@[-`{-¿ -⁯]/;

// Mirrors dir="auto": the first strongly directional character wins.
export const isRtlText = (text: string = ''): boolean => {
  for (const ch of text) {
    if (RTL_CHAR.test(ch)) {
      return true;
    }
    if (!NEUTRAL_CHAR.test(ch)) {
      return false;
    }
  }
  return false;
};
