import { deleteLanguageDeck, listLanguages } from '@vocably/api';
import { LanguageDeck } from '@vocably/model';
import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import * as asyncAppStorage from '../asyncAppStorage';
import { Error } from '../Error';
import { Loader } from '../loaders/Loader';

const selectedLanguageStorageKey = 'selected-language';

export type LanguageContainerDeck = {
  status: 'initial' | 'loading' | 'loaded' | 'error';
  deck: LanguageDeck;
};

type DecksCollection = Record<string, LanguageContainerDeck>;

type Languages = {
  status: 'loading' | 'loaded' | 'error';
  languages: string[];
  decks: DecksCollection;
  storeDeck: (deck: LanguageContainerDeck) => void;
  deleteLanguage: (language: string) => ReturnType<typeof deleteLanguageDeck>;
  selectedLanguage: string;
  selectLanguage: (language: string) => Promise<void>;
  refreshLanguages: () => Promise<void>;
  addLanguage: (language: string) => void;
};

export const LanguagesContext = createContext<Languages>({
  status: 'loading',
  languages: [],
  decks: {},
  storeDeck: () => null,
  deleteLanguage: () =>
    Promise.resolve({
      success: true,
      value: null,
    }),
  selectedLanguage: '',
  selectLanguage: () => Promise.resolve(),
  refreshLanguages: () => Promise.resolve(),
  addLanguage: () => null,
});

type LanguagesContainer = FC<{
  children: ReactNode;
}>;

export const LanguagesContainer: LanguagesContainer = ({ children }) => {
  const [status, setStatus] = useState<Languages['status']>('loading');
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [decks, setDecks] = useState<DecksCollection>({});

  const storeDeck = useCallback(
    (deck: LanguageContainerDeck) => {
      setDecks({
        ...decks,
        [deck.deck.language]: deck,
      });
    },
    [decks, setDecks]
  );

  const addLanguage = useCallback(
    (language: string) => {
      if (languages.includes(language)) {
        return;
      }

      setLanguages([...languages, language]);
    },
    [languages, setLanguages]
  );

  const selectLanguage = useCallback((language: string) => {
    setSelectedLanguage(language);
    return asyncAppStorage.setItem(selectedLanguageStorageKey, language);
  }, []);

  const deleteLanguage = useCallback(
    (language: string) =>
      deleteLanguageDeck(language).then((result) => {
        if (result.success === false) {
          return result;
        }

        const { [language]: _, ...newDecks } = decks;
        setDecks(newDecks);

        setLanguages((prevLanguages) =>
          prevLanguages.filter((prevLanguage) => prevLanguage !== language)
        );

        return result;
      }),
    [setLanguages]
  );

  const refreshLanguages = useCallback(() => {
    return Promise.all([
      listLanguages(),
      asyncAppStorage.getItem(selectedLanguageStorageKey),
    ]).then(([listResult, storedSelectedLanguage]) => {
      if (listResult.success === false) {
        setStatus('error');
        return;
      }

      setStatus('loaded');
      return selectLanguage(storedSelectedLanguage ?? '').then(() =>
        setLanguages(listResult.value)
      );
    });
  }, [listLanguages, setStatus, setLanguages, selectLanguage]);

  useEffect(() => {
    refreshLanguages().then();
  }, [refreshLanguages]);

  useEffect(() => {
    if (selectedLanguage !== '' && languages.includes(selectedLanguage)) {
      return;
    }

    if (languages.length > 0) {
      selectLanguage(languages[0]).then();
      return;
    }

    selectLanguage('').then();
  }, [languages]);

  const value: Languages = {
    status,
    languages,
    decks,
    storeDeck: storeDeck,
    deleteLanguage,
    selectedLanguage: selectedLanguage,
    selectLanguage,
    refreshLanguages,
    addLanguage,
  };

  return (
    <LanguagesContext.Provider value={value}>
      {status === 'loading' && <Loader>Loading languages...</Loader>}
      {status === 'error' && (
        <Error onRetry={refreshLanguages}>
          Oops! We're unable to load your languages and cards right now.
        </Error>
      )}
      {status === 'loaded' && children}
    </LanguagesContext.Provider>
  );
};
