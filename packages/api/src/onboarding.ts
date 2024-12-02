import { OnboardingAction, Result } from '@vocably/model';
import { request } from './restClient';

export const postOnboardingAction = async (
  action: OnboardingAction
): Promise<Result<any>> => {
  return await request('/onboard', {
    method: 'POST',
    body: JSON.stringify(action),
  });
};
