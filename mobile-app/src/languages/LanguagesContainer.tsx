import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'react';
import { listLanguages, deleteLanguageDeck } from '@vocably/api';
import { Loader } from '../Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const selectedLanguageStorageKey = 'selected-language';

type Languages = {
  status: 'loading' | 'loaded' | 'error';
  languages: string[];
  deleteLanguage: (language: string) => ReturnType<typeof deleteLanguageDeck>;
  selectedLanguage: string;
  selectLanguage: (language: string) => Promise<void>;
};

export const LanguagesContext = createContext<Languages>({
  status: 'loading',
  languages: [],
  deleteLanguage: () =>
    Promise.resolve({
      success: true,
      value: null,
    }),
  selectedLanguage: '',
  selectLanguage: () => Promise.resolve(),
});

type LanguagesContainer = FC<{
  children: ReactNode;
}>;

export const LanguagesContainer: LanguagesContainer = ({ children }) => {
  const [status, setStatus] = useState<Languages['status']>('loading');
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const selectLanguage = useCallback((language: string) => {
    setSelectedLanguage(language);
    return AsyncStorage.setItem(selectedLanguageStorageKey, language);
  }, []);

  const deleteLanguage = useCallback(
    (language: string) =>
      deleteLanguageDeck(language).then((result) => {
        if (result.success === false) {
          return result;
        }

        setLanguages((prevLanguages) =>
          prevLanguages.filter((prevLanguage) => prevLanguage !== language)
        );

        return result;
      }),
    []
  );

  useEffect(() => {
    Promise.all([
      listLanguages(),
      AsyncStorage.getItem(selectedLanguageStorageKey),
    ])
      .then(([listResult, storedSelectedLanguage]) => {
        if (listResult.success === false) {
          setStatus('error');
          return;
        }

        setStatus('loaded');
        selectLanguage(storedSelectedLanguage ?? '').then(() =>
          setLanguages(listResult.value)
        );
      })
      .then();
  }, []);

  useEffect(() => {
    if (selectedLanguage !== '' && languages.includes(selectedLanguage)) {
      return;
    }

    if (languages.length > 0) {
      selectLanguage(languages[0]).then();
    }
  }, [languages]);

  const value: Languages = {
    status,
    languages,
    deleteLanguage,
    selectedLanguage,
    selectLanguage,
  };

  return (
    <LanguagesContext.Provider value={value}>
      {status === 'loading' && <Loader>Loading languages...</Loader>}
      {status === 'error' && <>Loading error</>}
      {status === 'loaded' && children}
    </LanguagesContext.Provider>
  );
};
