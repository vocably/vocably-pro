import { Result } from '@vocably/model';
import { URLSearchParams } from 'url';
import { config } from './config';
import { LexicalaLanguage } from './lexicala/lexicalaLanguageMapper';
import { request } from './request';

export type Headword = {
  text?: string;
  pos?: string;
  gender?: string;
  alternative_scripts?: Array<{ type: string; text: string }>;
};

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
    examples?: Array<{ text: string }>;
  }[];
};

export const lexicala = async (
  language: LexicalaLanguage,
  text: string,
  overriddenParams: {
    morph?: 'true' | 'false';
    analyzed?: 'true' | 'false';
  } = {}
): Promise<Result<LexicalaSearchResultItem[]>> => {
  try {
    const requestOptions = {
      host: config.lexicalaHost,
      path: `/search-entries?${new URLSearchParams({
        language,
        text,
        source: 'global',
        morph: 'true',
        analyzed: 'true',
        ...overriddenParams,
      }).toString()}`,
      headers: {
        'X-RapidAPI-Host': config.lexicalaHost,
        'X-RapidAPI-Key': config.lexicalaKey,
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
