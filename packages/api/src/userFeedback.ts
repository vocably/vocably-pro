import { Result } from '@vocably/model';
import { request } from './restClient';

export const sendUserFeedback = async (payload: {
  feedback: string;
  metadata?: any;
}): Promise<Result<null>> => {
  try {
    return await request('/feedback', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  } catch (e) {
    return {
      success: false,
      errorCode: 'USER_FEEDBACK_REQUEST_FAILED',
      reason: 'The user feedback request failed.',
      extra: e,
    };
  }
};
