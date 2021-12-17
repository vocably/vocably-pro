import { request } from './restClient';
import { Phrase, Translation, Result } from '@vocably/model';

export const translate = async (
  phrase: Phrase
): Promise<Result<Translation>> => {
  try {
    const result = await request('/translate', {
      method: 'POST',
      body: JSON.stringify(phrase),
    });

    return {
      success: true,
      value: result,
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'API_TRANSLATION_REQUEST_FAILED',
      reason: 'The translation request has failed.',
      extra: e,
    };
  }
};
