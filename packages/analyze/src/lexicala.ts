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
  pronunciation?: { value?: string };
  number?: string;
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

export type LexicalaOverriddenParams = {
  morph?: 'true' | 'false';
  analyzed?: 'true' | 'false';
};

export const lexicala = async (
  language: LexicalaLanguage,
  text: string,
  overriddenParams: LexicalaOverriddenParams = {}
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

    const lexicalaItems: LexicalaSearchResultItem[] =
      JSON.parse(result.value).results ?? [];

    return {
      success: true,
      // Senses are sometimes missing in Lexicala output which leads to further confusions
      value: lexicalaItems.filter((item) => item.senses),
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
