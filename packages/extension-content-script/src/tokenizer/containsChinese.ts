const chineseRangeWithoutPunctuation: Array<[number, number]> = [
  // sequence is determine by occurrence probability

  [0x4e00, 0x9fff], // CJK Unified Ideographs

  [0x3400, 0x4dbf], // CJK Unified Ideographs Extension A
  [0x20000, 0x2a6df], // CJK Unified Ideographs Extension B
  [0x2a700, 0x2b73f], // CJK Unified Ideographs Extension C
  [0x2b740, 0x2b81f], // CJK Unified Ideographs Extension D
  [0x2b820, 0x2ceaf], // CJK Unified Ideographs Extension E

  [0x3300, 0x33ff], // https://en.wikipedia.org/wiki/CJK_Compatibility
  [0xfe30, 0xfe4f], // https://en.wikipedia.org/wiki/CJK_Compatibility_Forms
  [0xf900, 0xfaff], // https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs
  [0x2f800, 0x2fa1f], // https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs_Supplement
];

const chineseRangeWithPunctuation: Array<[number, number]> =
  chineseRangeWithoutPunctuation.concat([
    // START Chinese punctuation
    [0xff0c, 0xff0c], //，
    [0x3002, 0x3002], //。
    [0x00b7, 0x00b7], //·
    [0x00d7, 0x00d7], //×
    [0x2014, 0x2014], //—
    [0x2018, 0x2018], //‘
    [0x2019, 0x2019], //’
    [0x201c, 0x201c], //“
    [0x201d, 0x201d], //”
    [0x2026, 0x2026], //…
    [0x3001, 0x3001], //、
    [0x300a, 0x300a], //《
    [0x300b, 0x300b], //》
    [0x300e, 0x300e], //『
    [0x300f, 0x300f], //』
    [0x3010, 0x3010], //【
    [0x3011, 0x3011], //】
    [0xff01, 0xff01], //！
    [0xff08, 0xff08], //（
    [0xff09, 0xff09], //）
    [0xff1a, 0xff1a], //：
    [0xff1b, 0xff1b], //；
    [0xff1f, 0xff1f], //？
    [0xff5e, 0xff5e], //～
    // END Chinese punctuation
  ]);

const convertCharRangeToRegExp = (range: Array<[number, number]>): RegExp => {
  const reStr = range
    .map((range) => {
      if (range[0] === range[1]) {
        return `\\u{${range[0].toString(16)}}`;
      }
      return `[\\u{${range[0].toString(16)}}-\\u{${range[1].toString(16)}}]`;
    })
    .join('|');

  return new RegExp(`${reStr}`, 'u');
};

const reWithPunctuation = convertCharRangeToRegExp(chineseRangeWithPunctuation);

export const containsChinese = (text: string): boolean => {
  return reWithPunctuation.test(text);
};
