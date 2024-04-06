export const tokenize = (text: string): string[] => {
  return text.replace(/\W+/g, ' ').trim().split(' ');
};
