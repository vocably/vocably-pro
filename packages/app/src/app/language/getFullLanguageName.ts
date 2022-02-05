import languages from './languages';

export const getFullLanguageName = (code: string): string => {
  // @ts-ignore
  return languages[code] ?? code;
};
