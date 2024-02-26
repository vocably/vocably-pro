import { LanguageDeck, Result } from '@vocably/model';
import { XMLParser } from 'fast-xml-parser';
import { request } from './restClient';

const parser = new XMLParser();

export const saveLanguageDeck = async (
  languageDeck: LanguageDeck
): Promise<Result<null>> => {
  try {
    return await request(`/languages/${languageDeck.language}`, {
      method: 'PUT',
      body: JSON.stringify(languageDeck),
    });
  } catch (e) {
    return {
      success: false,
      errorCode: 'LANGUAGE_DECK_SAVE_ERROR',
      reason: 'An error during the saving of a language deck has occurred.',
      extra: e,
    };
  }
};

export const loadLanguageDeck = async (
  language: string
): Promise<Result<LanguageDeck>> => {
  try {
    const result = await request(`/languages/${language}`, {
      method: 'GET',
    });

    if (result.success === false) {
      return result;
    }

    if (!result.value) {
      return {
        success: true,
        value: {
          language,
          cards: [],
        },
      };
    }

    return result;
  } catch (e) {
    return {
      success: false,
      errorCode: 'LANGUAGE_DECK_LOAD_ERROR',
      reason: 'An error during the loading of a language deck has occurred.',
      extra: e,
    };
  }
};

export const listLanguages = async (): Promise<Result<string[]>> => {
  try {
    const result = await request(`/languages`, {
      method: 'GET',
    });

    if (result.success === false) {
      return result;
    }

    const jsonResult = parser.parse(result.value);

    let contents = jsonResult?.ListBucketResult?.Contents ?? [];
    if (!Array.isArray(contents)) {
      contents = [contents];
    }

    const languages = contents
      .map((r) => r.Key)
      .map((fileName) => fileName.split('/').pop());

    return {
      success: true,
      value: languages,
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'LANGUAGE_DECKS_LIST_ERROR',
      reason:
        'An error during the retrieving of available language decks has occurred.',
      extra: e,
    };
  }
};

export const deleteLanguageDeck = async (
  language: string
): Promise<Result<null>> => {
  try {
    return await request(`/languages/${language}`, {
      method: 'DELETE',
    });
  } catch (e) {
    return {
      success: false,
      errorCode: 'LANGUAGE_DECK_DELETE_ERROR',
      reason: 'An error during the deletion of a language deck has occurred.',
      extra: e,
    };
  }
};
