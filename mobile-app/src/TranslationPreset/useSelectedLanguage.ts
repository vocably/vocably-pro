import { useCallback, useContext, useEffect, useState } from 'react';
import * as asyncAppStorage from '../asyncAppStorage';
import { LanguagesContext } from '../languages/LanguagesContainer';

export const useSelectedLanguage = (): [string, (language: string) => void] => {
  const { selectedLanguage: dashboardLanguage } = useContext(LanguagesContext);
  const [selectedLanguage, setSelectedLanguageState] =
    useState(dashboardLanguage);

  const setSelectedLanguage = useCallback(
    async (language: string) => {
      setSelectedLanguageState(language);
      await asyncAppStorage.setItem('selectedLanguage', language);
    },
    [setSelectedLanguageState]
  );

  useEffect(() => {
    asyncAppStorage.getItem('selectedLanguage').then((language) => {
      if (language) {
        setSelectedLanguageState(language);
      }
    });
  }, [setSelectedLanguageState]);

  return [selectedLanguage, setSelectedLanguage];
};
