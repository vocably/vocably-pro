import { parseJson } from '@vocably/api';
import { nodeFetchS3File, nodePutS3File } from '@vocably/lambda-shared';
import { GoogleLanguage, isTense, Result, Tense } from '@vocably/model';
import { isSafeObject, sanitizeTranscript } from '@vocably/sulna';
import { isArray, isString, omit } from 'lodash-es';
import { config } from './config';
import { fallback } from './fallback';
import { isVerb } from './isVerb';
import {
  genderLanguages,
  numberlessLanguages,
  pluralsWithArticles,
} from './languageSettings';
import { removeAuxiliaryWords } from './removeAuxiliaryWords';
import { sanitizePartOfSpeech } from './sanitizePartOfSpeech';
import { transformSource } from './transformSource';
import { gptAnalyse } from './unitOfSpeechAnalyzeChatGpt';
import { geminiAnalyse } from './unitOfSpeechAnalyzeGemini';
import { validateSource } from './validateSource';

export type AiAnalysis = {
  source: string;
  definitions: string[];
  examples: string[];
  lemma: string;
  lemmaPos: string;
  synonyms: string[];
  transcript: string;
  number: string;
  gender?: string;
  tense?: Tense;
  exists?: boolean;
  pastTenses?: string;
  presentTenses?: string;
  isIrregular?: boolean;
  pluralForm?: string;
  frequency?: number;
};

export const isAiAnalysis = (result: any): result is AiAnalysis => {
  if (!isSafeObject(result)) {
    return false;
  }
  return (
    'source' in result &&
    'definitions' in result &&
    'examples' in result &&
    'lemma' in result &&
    'lemmaPos' in result &&
    'synonyms' in result &&
    'number' in result &&
    isArray(result['definitions']) &&
    isArray(result['examples']) &&
    isArray(result['synonyms'])
  );
};

export type InternalAiAnalysis = Omit<AiAnalysis, 'source'> & {
  headword: string;
};

export const isInternalAiAnalysis = (
  result: any
): result is InternalAiAnalysis => {
  if (!isSafeObject(result)) {
    return false;
  }
  return (
    'headword' in result &&
    'definitions' in result &&
    'examples' in result &&
    'lemma' in result &&
    'lemmaPos' in result &&
    'synonyms' in result &&
    'number' in result &&
    isArray(result['definitions']) &&
    isArray(result['examples']) &&
    isArray(result['synonyms'])
  );
};

export const convertInternalToExternal = (
  internal: InternalAiAnalysis
): AiAnalysis => {
  return {
    ...omit(internal, 'headword'),
    source: internal.headword,
  };
};

export type AiAnalysePayload = {
  source: string;
  partOfSpeech: string;
  sourceLanguage: GoogleLanguage;
};

export type InflectionKey =
  | 'pastTenses'
  | 'tense'
  | 'pluralForm'
  | 'isIrregular'
  | 'presentTenses';

const pastTensePrompts: Partial<Record<GoogleLanguage, string>> = {
  'pt-PT': 'past simple and past perfect tense with necessary auxiliary verbs',
  pt: 'past simple and past perfect tense with necessary auxiliary verbs',
  af: 'past simple and present perfect tense with necessary auxiliary verbs',
  nl: 'past simple and present perfect tense with necessary auxiliary verbs',
  da: 'past simple and present perfect tense with necessary auxiliary verbs',
  no: 'past simple and present perfect tense with necessary auxiliary verbs',
  it: 'past simple and present perfect tense with necessary auxiliary verbs',
  fr: 'past simple and present perfect tense with necessary auxiliary verbs',
  es: 'past simple and present perfect tense with necessary auxiliary verbs',
  de: 'past simple and present perfect tense with necessary auxiliary verbs no pronouns',
  sv: 'past simple and present perfect tense with necessary auxiliary verbs',
  en: 'past simple and perfect tenses',
  'en-GB': 'past simple and perfect tenses',
};

const presentTensePrompts: Partial<Record<GoogleLanguage, string>> = {
  de: 'present simple tense for ich, du, er/sie/es',
};

export const MIN_FREQUENCY = 1;
export const MAX_FREQUENCY = 10;

export const getFrequencyPrompt = (
  languageName: string,
  partOfSpeech: string
): string =>
  `how commonly the ${partOfSpeech} is used in everyday ${languageName}. Integer from ${MIN_FREQUENCY} (rare, specialized or archaic) to ${MAX_FREQUENCY} (one of the most common words)`;

export const sanitizeFrequency = (value: unknown): number | undefined => {
  const numericValue =
    isString(value) && value.trim() !== '' ? Number(value) : value;

  if (typeof numericValue !== 'number' || !Number.isFinite(numericValue)) {
    return undefined;
  }

  return Math.min(
    MAX_FREQUENCY,
    Math.max(MIN_FREQUENCY, Math.round(numericValue))
  );
};

export const sanitizeEnglishPastTenses = (
  pastTenses: string,
  isIrregular: boolean
): string => {
  const pastTensesArray = pastTenses
    .split(',')
    .map((s) => removeAuxiliaryWords(s.trim(), 'en'));
  if (pastTensesArray.length === 0) {
    return '';
  }

  if (pastTensesArray.length === 1 && isIrregular) {
    return `${pastTensesArray[0]}, ${pastTensesArray[0]}`;
  }

  if (pastTensesArray.length === 1) {
    return pastTensesArray[0];
  }

  if (
    pastTensesArray.length === 2 &&
    pastTensesArray[0] === pastTensesArray[1] &&
    !isIrregular
  ) {
    return pastTensesArray[0];
  }

  return pastTensesArray.join(', ');
};

export const getInflectionsPrompt = ({
  partOfSpeech,
  sourceLanguage,
}: AiAnalysePayload): Partial<Record<InflectionKey, string>> => {
  const infections: Partial<Record<InflectionKey, string>> = {};
  if (isVerb(partOfSpeech)) {
    infections.tense = 'present, past, or future. English only';

    if (pastTensePrompts[sourceLanguage]) {
      infections.pastTenses = pastTensePrompts[sourceLanguage];
    }

    if (presentTensePrompts[sourceLanguage]) {
      infections.presentTenses = presentTensePrompts[sourceLanguage];
    }
  }

  if (
    isVerb(partOfSpeech) &&
    ['en', 'en-GB', 'nl', 'de'].includes(sourceLanguage)
  ) {
    infections.isIrregular = 'true or false';
  }

  if (
    partOfSpeech.includes('noun') &&
    !numberlessLanguages.includes(sourceLanguage)
  ) {
    infections.pluralForm = `plural form${
      pluralsWithArticles.includes(sourceLanguage)
        ? ' with the appropriate article'
        : ''
    }`;
  }

  return infections;
};

export const sanitizeAiAnalyseResult = (
  language: GoogleLanguage,
  partOfSpeech: string,
  result: AiAnalysis
): AiAnalysis => {
  const genders = genderLanguages[language] ?? [];

  const output: AiAnalysis = {
    ...result,
    source: transformSource({
      source: result.source,
      sourceLanguage: language,
      partOfSpeech,
    }),
    lemmaPos: sanitizePartOfSpeech(result.lemmaPos ?? ''),
    transcript: sanitizeTranscript(result.transcript ?? ''),
  };

  if (genders.includes(result.gender ?? '')) {
    output.gender = result.gender;
  } else {
    delete output.gender;
  }

  const frequency = sanitizeFrequency(result.frequency);
  if (frequency === undefined) {
    delete output.frequency;
  } else {
    output.frequency = frequency;
  }

  if (isTense(result.tense)) {
    output.tense = result.tense;
  }

  if (isArray(result.pastTenses)) {
    output.pastTenses = result.pastTenses.join(', ');
  }

  if (isArray(result.presentTenses)) {
    output.presentTenses = result.presentTenses.join(', ');
  }

  if (isSafeObject(result.pastTenses)) {
    output.pastTenses = Object.values(result.pastTenses).join(', ');
  }

  if (isSafeObject(result.presentTenses)) {
    output.presentTenses = Object.values(result.presentTenses).join(', ');
  }

  if (output.pluralForm === 'null') {
    delete output.pluralForm;
  }

  if (output.pastTenses === 'null') {
    delete output.pastTenses;
  }

  if (output.presentTenses === 'null') {
    delete output.presentTenses;
  }

  if (isString(output.pastTenses) && ['en', 'en-GB'].includes(language)) {
    output.pastTenses = sanitizeEnglishPastTenses(
      output.pastTenses,
      !!result.isIrregular
    );
  }

  return output;
};

export const getAnalyseCacheFileName = ({
  sourceLanguage,
  source,
  partOfSpeech,
}: AiAnalysePayload): string => {
  return `${sourceLanguage.toLowerCase()}/units-of-speech/${source
    .toLowerCase()
    .replace(/\//g, '-')}/${partOfSpeech
    .toLowerCase()
    .replace(/\//g, '-')}.json`;
};

export const aiAnalyse = async (
  payload: AiAnalysePayload
): Promise<Result<AiAnalysis>> => {
  const isSourceValid = validateSource({
    source: payload.source,
    partOfSpeech: payload.partOfSpeech,
  });
  const fileName = getAnalyseCacheFileName(payload);

  const s3FetchResult = await nodeFetchS3File(
    config.unitsOfSpeechBucket,
    fileName
  );

  if (s3FetchResult.success && s3FetchResult.value !== null) {
    const parseResult = parseJson(s3FetchResult.value);

    if (parseResult.success && isAiAnalysis(parseResult.value)) {
      return {
        success: true,
        value: sanitizeAiAnalyseResult(
          payload.sourceLanguage,
          payload.partOfSpeech,
          parseResult.value
        ),
      };
    }
  }

  const analyseResult = await fallback(geminiAnalyse(payload), () =>
    gptAnalyse(payload)
  );

  if (!analyseResult.success) {
    return analyseResult;
  }

  if (!analyseResult.value.exists) {
    return {
      success: false,
      reason: 'The requested word does not exist in the language',
      errorCode: 'WORD_NOT_EXIST',
    };
  }

  const sanitizedAiAnalyzeResult = sanitizeAiAnalyseResult(
    payload.sourceLanguage,
    payload.partOfSpeech,
    analyseResult.value
  );

  if (
    isSourceValid &&
    (!analyseResult.fallenBack ||
      analyseResult.errorCode === 'PROHIBITED_CONTENT') &&
    analyseResult.value.exists === true
  ) {
    const putResult = await nodePutS3File(
      config.unitsOfSpeechBucket,
      fileName,
      JSON.stringify(sanitizedAiAnalyzeResult)
    );

    if (!putResult.success) {
      console.error('Failed to put GPT analyse the result to S3', putResult);
    }
  }

  return {
    success: true,
    value: sanitizedAiAnalyzeResult,
  };
};
