import { request } from './restClient';
import { AnalyzePayload, Analysis, Result } from '@vocably/model';

export const analyze = async (
  payload: AnalyzePayload
): Promise<Result<Analysis>> => {
  try {
    return await request('/analyze', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  } catch (e) {
    return {
      success: false,
      errorCode: 'API_TRANSLATION_REQUEST_FAILED',
      reason: 'The translation request has failed.',
      extra: e,
    };
  }
};
