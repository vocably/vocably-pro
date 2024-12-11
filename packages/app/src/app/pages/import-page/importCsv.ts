import { loadLanguageDeck, saveLanguageDeck } from '@vocably/api';
import { makeCreate } from '@vocably/crud';
import {
  Card,
  GoogleLanguage,
  isTagItem,
  LanguageDeck,
  NewTag,
  Result,
  TagItem,
} from '@vocably/model';
import { createSrsItem } from '@vocably/srs';

type Options = {
  language: GoogleLanguage;
  csvCards: Array<Pick<Card, 'source' | 'translation' | 'partOfSpeech'>>;
  tags: Array<TagItem | NewTag>;
};

export const importCsv = async ({
  language,
  csvCards,
  tags,
}: Options): Promise<Result<LanguageDeck>> => {
  const loadResult = await loadLanguageDeck(language);
  if (loadResult.success === false) {
    return loadResult;
  }

  const languageDeck = loadResult.value;
  const addTag = makeCreate(languageDeck.tags);
  const addCard = makeCreate(languageDeck.cards);

  const tagItems = tags.map((tag) => (isTagItem(tag) ? tag : addTag(tag.data)));

  csvCards.forEach((csvCard) =>
    addCard({
      language,
      definition: '',
      tags: tagItems,
      ...csvCard,
      ...createSrsItem(),
    })
  );

  const saveResult = await saveLanguageDeck(languageDeck);
  if (!saveResult.success) {
    return saveResult;
  }

  return {
    success: true,
    value: languageDeck,
  };
};
