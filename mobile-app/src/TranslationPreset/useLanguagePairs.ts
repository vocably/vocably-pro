import { GoogleLanguage } from '@vocably/model';
import { useCallback, useEffect, useState } from 'react';
import * as asyncAppStorage from '../asyncAppStorage';

type LanguageSetting = {
  translationLanguage: GoogleLanguage;
  availableLanguages: GoogleLanguage[];
};

export type LanguagePairs = Partial<Record<GoogleLanguage, LanguageSetting>>;

export const useLanguagePairs = (): [
  languagePairs: LanguagePairs | null,
  saveLanguagePairs: (languageParis: LanguagePairs) => Promise<void>
] => {
  const [languagePairs, setLanguagePairs] = useState<LanguagePairs | null>(
    null
  );
  const saveLanguagePairs = useCallback(
    (languagePairs: LanguagePairs) => {
      setLanguagePairs(languagePairs);
      return asyncAppStorage.setItem(
        'languagePairs',
        JSON.stringify(languagePairs)
      );
    },
    [setLanguagePairs]
  );

  useEffect(() => {
    asyncAppStorage.getItem('languagePairs').then((languagePairs) => {
      setLanguagePairs(languagePairs ? JSON.parse(languagePairs) : {});
    });
  }, [setLanguagePairs]);

  return [languagePairs, saveLanguagePairs];
};
