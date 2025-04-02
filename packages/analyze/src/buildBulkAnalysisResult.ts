import { chatGptRequest, GPT_4O_MINI } from '@vocably/lambda-shared';
import {
  BulkAnalysis,
  BulkAnalysisPayload,
  languageList,
  Result,
} from '@vocably/model';
import { trimArticle } from '@vocably/sulna';
import { isArray, isNumber, isObject, isString } from 'lodash-es';
import { getWords } from './isOneWord';

type GptBulkAnalyseItem = {
  index: number;
  word: string;
  partOfSpeech: string;
};

const isGptBulkAnalyseItem = (item: any): item is GptBulkAnalyseItem => {
  if (!isObject(item)) {
    return false;
  }

  return (
    isString(item['word']) &&
    isString(item['partOfSpeech']) &&
    isNumber(item['index'])
  );
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
      if (getWords(trimmed.source).length <= 3) {
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
      } ordered list of words`,
      `<list>`,
      words.map((word, index) => `${index + 1}. ${word}`).join(`\n`),
      `</list>`,
      `Respond with JSON array as in example: {"words":[{"index": 1, word": "table", "partOfSpeech": "noun"}]}. Keep the order.`,
    ].join('\n');

    const responseResult = await chatGptRequest({
      messages: [
        {
          role: 'system',
          content:
            'You are a smart language assistant. Only respond to questions about vocabulary and translations.',
        },
        { role: 'user', content: prompt },
      ],
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
        source: words[gptResponseItem.index - 1],
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
