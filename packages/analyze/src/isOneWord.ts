export const getWords = (source: string): string[] => {
  return source.split(/\s/);
};

export const isOneWord = (source: string): boolean => {
  return getWords(source).length === 1;
};
