import { GoogleLanguage } from '@vocably/model';

export const joinStrings = (
  str: string[],
  language: GoogleLanguage
): string => {
  if (language === 'fa') {
    return str.reverse().join('، ');
  }

  return str.join(', ');
};
