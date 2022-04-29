import { Translation, Result, isSuccess, Language } from '@vocably/model';
import { translateText } from '../../translateText';

const isFulfilled = <T>(
  item: PromiseSettledResult<T>
): item is PromiseFulfilledResult<T> => item.status === 'fulfilled';

export const translateNormalizedHeadwords = async (
  headwords: string[],
  sourceLanguage: Language,
  originalTranslation: Translation
): Promise<Translation[]> => {
  const translationResults = await Promise.allSettled(
    headwords.map((headword) => {
      if (headword.toLowerCase() === originalTranslation.source.toLowerCase()) {
        return Promise.resolve({
          success: true,
          value: originalTranslation,
        } as Result<Translation>);
      } else {
        return translateText(headword, sourceLanguage);
      }
    })
  );

  return translationResults
    .filter(isFulfilled)
    .map((r) => r.value)
    .filter(isSuccess)
    .map((r) => r.value);
};
