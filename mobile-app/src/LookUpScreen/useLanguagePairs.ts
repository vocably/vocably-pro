import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleLanguage } from '@vocably/model';
import { useCallback, useEffect, useState } from 'react';

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
      return AsyncStorage.setItem(
        'languagePairs',
        JSON.stringify(languagePairs)
      );
    },
    [setLanguagePairs]
  );

  useEffect(() => {
    AsyncStorage.getItem('languagePairs').then((languagePairs) => {
      setLanguagePairs(languagePairs ? JSON.parse(languagePairs) : null);
    });
  }, [setLanguagePairs]);

  return [languagePairs, saveLanguagePairs];
};
