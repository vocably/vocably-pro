import { GoogleLanguage } from '@vocably/model';

export const joinDefinitions = (
  definitions: string[],
  language: GoogleLanguage
): string => {
  if (language === 'fa') {
    return definitions.reverse().join('، ');
  }

  return definitions.join(', ');
};
