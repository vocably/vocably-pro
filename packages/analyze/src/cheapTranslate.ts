import {
  GoogleLanguage,
  googleToNlp,
  Result,
  Translation,
} from '@vocably/model';
import { googleTranslate } from './googleTranslate';
import { nlpTranslate } from './nlpTranslate';

export const cheapTranslate = async (
  source: string,
  sourceLanguage: GoogleLanguage,
  targetLanguage: GoogleLanguage
): Promise<Result<Translation>> => {
  const nlpSourceLanguage = googleToNlp(sourceLanguage);
  const nlpTargetLanguage = googleToNlp(targetLanguage);

  if (!nlpSourceLanguage || !nlpTargetLanguage) {
    return googleTranslate(source, sourceLanguage, targetLanguage);
  }

  const nlpResult = await nlpTranslate(
    source,
    nlpSourceLanguage,
    nlpTargetLanguage
  );

  if (nlpResult.success === false) {
    return nlpResult;
  }

  return {
    success: true,
    value: {
      source,
      sourceLanguage,
      target: nlpResult.value.target,
      targetLanguage,
    },
  };
};
