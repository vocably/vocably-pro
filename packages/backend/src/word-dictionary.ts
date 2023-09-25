import { Result } from "@vocably/model";
import { request } from './utils/request'

export type WordDictionaryResponse = {
  entry: string;
  request: string;
  response: string;
  meaning: {
    noun: string;
    verb: string;
    adverb: string;
    adjective: string;
  }
}

export const wordDictionary = async (entry: string): Promise<Result<WordDictionaryResponse>> => {
  try {
    const host = 'twinword-word-graph-dictionary.p.rapidapi.com';
    const requestOptions = {
      host,
      path: `/definition/?${new URLSearchParams({
        entry
      }).toString()}`,
      headers: {
        'X-RapidAPI-Host': host,
        'X-RapidAPI-Key': process.env.LEXICALA_KEY,
      },
    };

    const result = await request(requestOptions);

    if (result.success === false) {
      return {
        ...result,
        errorCode: 'WORD_DICTIONARY_UNSUCCESSFUL_FETCH',
      };
    }

    const searchResult: any = JSON.parse(result.value);

    if (searchResult.result_code !== '200') {
      return {
        success: false,
        errorCode: 'WORD_DICTIONARY_NON_SUCCESSFUL_RESPONSE',
        reason: searchResult.result_msg
      }
    }

    return {
      success: true,
      value: searchResult,
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'WORD_DICTIONARY_UNCAUGHT_ERROR',
      reason: `An unhandled error while fetching data from Word Dictionary.`,
      extra: e,
    };
  }
}
