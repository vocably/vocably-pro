import { BulkAnalysis, BulkAnalysisPayload, Result } from '@vocably/model';
import { request } from './restClient';

export const bulkAnalyze = async (
  payload: BulkAnalysisPayload,
  abortController?: AbortController
): Promise<Result<BulkAnalysis>> => {
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
