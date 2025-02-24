export const trimLanguage = (language: string): string => {
  return language.replace(/ \(.+\)$/, '');
};
