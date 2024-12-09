import {
  BulkAnalysis,
  BulkAnalysisPayload,
  languageList,
  Result,
} from '@vocably/model';
import { trimArticle } from '@vocably/sulna';
import { isArray, isObject, isString } from 'lodash-es';
import { chatGptRequest, GPT_4O_MINI } from './chatGptRequest';
import { isOneWord } from './isOneWord';

type GptBulkAnalyseItem = {
  word: string;
  partOfSpeech: string;
};

const isGptBulkAnalyseItem = (item: any): item is GptBulkAnalyseItem => {
  if (!isObject(item)) {
    return false;
  }

  return isString(item['word']) && isString(item['partOfSpeech']);
};

type GptBulkAnalyzeResult = {
  words: Array<GptBulkAnalyseItem>;
};

const isGptBulkAnalyzeResult = (
  result: any
): result is GptBulkAnalyzeResult => {
  if (!isObject(result) && !isArray(result['words'])) {
    return false;
  }

  return result['words'].every(isGptBulkAnalyseItem);
};

export const buildBulkAnalysisResult = async (
  payload: BulkAnalysisPayload
): Promise<Result<BulkAnalysis>> => {
  const [phrases, words] = payload.sources.reduce(
    ([phrases, words], source) => {
      const trimmed = trimArticle(payload.sourceLanguage, source);
      if (isOneWord(trimmed.source)) {
        return [phrases, [...words, source]];
      } else {
        return [[...phrases, source], words];
      }
    },
    [[] as string[], [] as string[]]
  );

  let analysis: BulkAnalysis['analysis'] = phrases.map((phrase) => ({
    source: phrase,
    partOfSpeech: 'phrase',
  }));

  if (words.length > 0) {
    const prompt = [
      `Provide the part of speech of the following ${
        languageList[payload.sourceLanguage]
      }  words`,
      `<list>`,
      words.join(`\n`),
      `</list>`,
      `Respond with JSON array as in example: {"words":[{"word": "table", "partOfSpeech": "noun"}]}`,
    ].join('\n');

    const responseResult = await chatGptRequest({
      prompt,
      model: GPT_4O_MINI,
    });

    if (!responseResult.success) {
      return responseResult;
    }

    if (!isGptBulkAnalyzeResult(responseResult.value)) {
      return {
        success: false,
        errorCode: 'GPT_RESPONSE_MALFORMED',
        reason:
          'The bulk analysis GPT request responded with the malformed response',
        extra: { payload, response: responseResult.value },
      };
    }

    analysis = [
      ...analysis,
      ...responseResult.value.words.map((gptResponseItem) => ({
        source: gptResponseItem.word,
        partOfSpeech: gptResponseItem.partOfSpeech,
      })),
    ];
  }

  return {
    success: true,
    value: {
      sourceLanguage: payload.sourceLanguage,
      analysis,
    },
  };
};
