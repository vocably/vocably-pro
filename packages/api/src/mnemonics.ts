import {
  GenerateMnemonicPayload,
  GenerateMnemonicResult,
  Result,
} from '@vocably/model';
import { request } from './restClient';

export const generateMnemonic = async (
  payload: GenerateMnemonicPayload,
  abortController?: AbortController
): Promise<Result<GenerateMnemonicResult>> => {
  try {
    return await request('/generate-mnemonic', {
      method: 'POST',
      body: JSON.stringify(payload),
      signal: abortController?.signal,
    });
  } catch (e) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'The mnemonic generation request has failed.',
      extra: e,
    };
  }
};
