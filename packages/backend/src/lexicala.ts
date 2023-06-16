import { Result } from '@vocably/model';
import { URLSearchParams } from 'url';
import { LexicalaLanguage } from './lexicala/lexicalaLanguageMapper';
import { request } from './utils/request';

export type Headword = { text?: string; pos?: string; gender?: string };

export type LexicalaTranslation = {
  text: string;
  gender?: string;
  pronunciation?: { value: string };
};

export type LexicalaSearchResultItem = {
  id: string;
  language: LexicalaLanguage;
  headword: Headword | Headword[];
  senses: {
    id?: string;
    definition?: string;
    translations?: Partial<
      Record<LexicalaLanguage, LexicalaTranslation | LexicalaTranslation[]>
    >;
  }[];
};

export const lexicala = async (
  language: LexicalaLanguage,
  text: string
): Promise<Result<LexicalaSearchResultItem[]>> => {
  try {
    const requestOptions = {
      host: process.env.LEXICALA_HOST,
      path: `/search-entries?${new URLSearchParams({
        language,
        text,
        source: 'global',
        morph: 'true',
        analyzed: 'true',
      }).toString()}`,
      headers: {
        'X-RapidAPI-Host': process.env.LEXICALA_HOST,
        'X-RapidAPI-Key': process.env.LEXICALA_KEY,
      },
    };

    const result = await request(requestOptions);

    if (result.success === false) {
      return {
        ...result,
        errorCode: 'LEXICALA_UNSUCCESSFUL_FETCH',
      };
    }

    const searchResult: any = JSON.parse(result.value);

    return {
      success: true,
      value: searchResult.results ?? [],
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'LEXICALA_UNCAUGHT_ERROR',
      reason: `An unhandled error while fetching data from Lexicala.`,
      extra: e,
    };
  }
};
