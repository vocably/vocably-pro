const hangulLetter =
  /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g;
export const containsKorean = (text: string): boolean => {
  return text.match(hangulLetter) !== null;
};
