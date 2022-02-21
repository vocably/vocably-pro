import { NormalizedTranslation, Result, isSuccess } from '@vocably/model';
import { translateText, Translation } from '../../translateText';

const isFulfilled = <T>(
  item: PromiseSettledResult<T>
): item is PromiseFulfilledResult<T> => item.status === 'fulfilled';

export const translateNormalizedHeadwords = async (
  headwords: string[],
  language: string,
  originalTranslation: Translation
): Promise<NormalizedTranslation[]> => {
  const translationResults = await Promise.allSettled(
    headwords.map((headword) => {
      if (headword.toLowerCase() === originalTranslation.text.toLowerCase()) {
        return Promise.resolve({
          success: true,
          value: originalTranslation,
        } as Result<Translation>);
      } else {
        return translateText(headword, language);
      }
    })
  );

  return translationResults
    .filter(isFulfilled)
    .map((r) => r.value)
    .filter(isSuccess)
    .map((r) => ({
      phrase: r.value.source,
      language,
      translation: r.value.text,
    }));
};
