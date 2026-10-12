import { chatGptRequest, GPT_4O } from '@vocably/lambda-shared';
import { GoogleLanguage, languageList, Result } from '@vocably/model';
import { ChatModel } from 'openai/resources';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';
import { getTranscriptionName } from './getTranscriptionName';
import { isVerb } from './isVerb';
import { genderLanguages } from './languageSettings';
import {
  AiAnalysePayload,
  AiAnalysis,
  convertInternalToExternal,
  getFrequencyPrompt,
  getInflectionsPrompt,
  isInternalAiAnalysis,
  sanitizeAiAnalyseResult,
} from './unitOfSpeechAnalyse';

type GptAnalyseChatGptBody = {
  messages: Array<ChatCompletionMessageParam>;
  model: ChatModel;
};

export const getGptAnalyseChatGptBody = ({
  source,
  partOfSpeech,
  sourceLanguage,
}: AiAnalysePayload): GptAnalyseChatGptBody => {
  const isTranscriptionNeeded = source.length <= 20;
  const languageName = languageList[sourceLanguage];

  const genders = genderLanguages[sourceLanguage] ?? [];

  const transcriptionType = getTranscriptionName(sourceLanguage);

  const inflections = getInflectionsPrompt({
    source,
    partOfSpeech,
    sourceLanguage,
  });

  const prompt = [
    `You are a smart language dictionary.`,
    `User provides a word in ${languageName} and its part of speech.`,
    `Only respond in JSON format with an object containing the following properties:`,
    isTranscriptionNeeded ? `transcript - ${transcriptionType}` : ``,
    `headword - word provided by user. Capitalize only when appropriate.`,
    `definitions - list of definitions in ${languageName}.${
      isVerb(partOfSpeech) ? ` Consider tense of the provided word.` : ''
    }`,
    `examples - list of extremely concise examples in ${languageName} with the headword used as a ${partOfSpeech}.`,
    `lemma - lemma or infinitive`,
    `lemmaPos - part of speech of the lemma in English`,
    `synonyms - short list of ${partOfSpeech} synonyms`,
    `number - plural or singular English only`,
    `exists - does the ${partOfSpeech} exist in ${languageName}? true or false`,
    `frequency - ${getFrequencyPrompt(languageName, partOfSpeech)}`,
    ...Object.entries(inflections).map(([key, value]) => `${key} - ${value}`),
    genders.length > 0 ? `gender - ${genders.join(', ')}, or other` : ``,
  ]
    .filter((s) => !!s)
    .join('\n');

  return {
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: source },
      { role: 'user', content: partOfSpeech },
    ],
    model: GPT_4O,
  };
};

type GptAnalyseResultPayload = {
  sourceLanguage: GoogleLanguage;
  partOfSpeech: string;
  response: any;
};

export const getGptAnalyseResult = ({
  sourceLanguage,
  partOfSpeech,
  response,
}: GptAnalyseResultPayload): Result<AiAnalysis> => {
  if (!isInternalAiAnalysis(response)) {
    return {
      success: false,
      reason: 'The GPT request responded with the malformed response',
      extra: { response },
    };
  }

  return {
    success: true,
    value: sanitizeAiAnalyseResult(
      sourceLanguage,
      partOfSpeech,
      convertInternalToExternal(response)
    ),
  };
};

export const gptAnalyse = async ({
  source,
  partOfSpeech,
  sourceLanguage,
}: AiAnalysePayload): Promise<Result<AiAnalysis>> => {
  const responseResult = await chatGptRequest({
    ...getGptAnalyseChatGptBody({ source, partOfSpeech, sourceLanguage }),
    timeoutMs: 6000,
  });

  if (!responseResult.success) {
    return responseResult;
  }

  return getGptAnalyseResult({
    sourceLanguage,
    partOfSpeech,
    response: responseResult.value,
  });
};
