import { isObject } from 'lodash-es';

const facilities = [
  'chrome-extension',
  'safari-extension',
  'ios-safari-extension',
  'ios-app',
  'android-app',
  'web-app',
] as const;

export type Facility = typeof facilities[number];

export type FacilityOnboardedAction = {
  name: 'facilityOnboarded';
  payload: {
    facility: Facility;
    targetLanguage: string;
  };
};

export type UserLoggedInAction = {
  name: 'userLoggedIn';
  payload: {
    facility: Facility;
  };
};

export type OnboardingAction = FacilityOnboardedAction | UserLoggedInAction;

const isFacility = (facility: any): facility is Facility => {
  return facilities.includes(facility);
};

export const isFacilityOnboardedAction = (
  action: any
): action is FacilityOnboardedAction => {
  if (!isObject(action)) {
    return false;
  }

  if (action['name'] !== 'facilityOnboarded') {
    return false;
  }

  if (!isObject(action['payload'])) {
    return false;
  }

  if (
    !isFacility(action['payload']['facility']) ||
    !action['payload']['targetLanguage']
  ) {
    return false;
  }

  return true;
};

export const isUserLoggedInAction = (
  action: any
): action is FacilityOnboardedAction => {
  if (!isObject(action)) {
    return false;
  }

  if (action['name'] !== 'userLoggedIn') {
    return false;
  }

  if (!isObject(action['payload'])) {
    return false;
  }

  if (!isFacility(action['payload']['facility'])) {
    return false;
  }

  return true;
};
