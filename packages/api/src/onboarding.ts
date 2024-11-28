import { Facility, Result } from '@vocably/model';
import { request } from './restClient';

type ExtensionOnboardingPayload = {
  facility: Facility;
  targetLanguage: string;
};
export const appOnboarded = async (
  payload: ExtensionOnboardingPayload
): Promise<Result<any>> => {
  return await request('/onboard', {
    method: 'POST',
    body: JSON.stringify({
      action: 'appOnboarded',
      payload: payload,
    }),
  });
};

type ExtensionInstalledPayload = {
  facility: Facility;
};
export const userLoggedIn = async (payload: ExtensionInstalledPayload) => {
  return await request('/onboard', {
    method: 'POST',
    body: JSON.stringify({
      action: 'userLoggedIn',
      payload: payload,
    }),
  });
};
