import { Facility, Result } from '@vocably/model';
import { request } from './restClient';

type ExtensionOnboardingPayload = {
  facility: Facility;
  targetLanguage: string;
};
export const extensionOnboarded = async (
  payload: ExtensionOnboardingPayload
): Promise<Result<any>> => {
  return await request('/onboard', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};
