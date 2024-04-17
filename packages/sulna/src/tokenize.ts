export const tokenize = (text: string): string[] => {
  return text
    .replace(/[^\p{Letter}\p{Mark}]+/gu, ' ')
    .trim()
    .split(' ');
};
