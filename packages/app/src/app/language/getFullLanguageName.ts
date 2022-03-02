import { languageList } from '@vocably/model';

export const getFullLanguageName = (code: string): string => {
  // @ts-ignore
  return languageList[code] ?? code;
};
