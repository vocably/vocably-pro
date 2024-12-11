import { BulkAnalysis, BulkAnalysisPayload, Result } from '@vocably/model';
import { request } from './restClient';

export const bulkAnalyze = async (
  payload: BulkAnalysisPayload,
  abortController?: AbortController
): Promise<Result<BulkAnalysis>> => {
  if (payload.sources.length === 0) {
    return {
      success: true,
      value: {
        sourceLanguage: payload.sourceLanguage,
        analysis: [],
      },
    };
  }

  try {
    return await request('/bulk-analyze', {
      method: 'POST',
      body: JSON.stringify(payload),
      signal: abortController?.signal,
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
