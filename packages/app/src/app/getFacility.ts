import { Facility } from '@vocably/model';
import { firstValueFrom } from 'rxjs';
import { browserType } from '../browser';
import { isExtensionInstalled$ } from './isExtensionInstalled';

export const getFacility = async (): Promise<Facility> => {
  const isExtensionInstalled = await firstValueFrom(isExtensionInstalled$);

  if (!isExtensionInstalled) {
    return 'web-app';
  }

  if (browserType === 'desktop-safari') {
    return 'safari-extension';
  }

  if (browserType === 'ios-safari') {
    return 'ios-safari-extension';
  }

  return 'chrome-extension';
};
