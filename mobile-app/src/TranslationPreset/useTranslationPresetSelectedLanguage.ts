import { useContext, useEffect, useState } from 'react';
import * as asyncAppStorage from '../asyncAppStorage';
import { LanguagesContext } from '../languages/LanguagesContainer';

export const useTranslationPresetSelectedLanguage = (): [
  string,
  (language: string) => void
] => {
  const { selectedLanguage: dashboardLanguage } = useContext(LanguagesContext);
  const [selectedLanguage, setSelectedLanguageState] =
    useState(dashboardLanguage);

  const setSelectedLanguage = async (language: string) => {
    setSelectedLanguageState(language);
    await asyncAppStorage.setItem(
      'translationPresetSelectedLanguage',
      language
    );
  };

  useEffect(() => {
    asyncAppStorage
      .getItem('translationPresetSelectedLanguage')
      .then((language) => {
        if (language) {
          setSelectedLanguageState(language);
        }
      });
  }, []);

  useEffect(() => {
    if (dashboardLanguage && !selectedLanguage) {
      setSelectedLanguageState(dashboardLanguage);
    }
  }, [selectedLanguage, dashboardLanguage]);

  return [selectedLanguage, setSelectedLanguage];
};
