export type Platform =
  | 'ios'
  | 'android'
  | 'chromeExtension'
  | 'safariExtension';
export type RateInteractionPayload = 'never' | 'later' | 'feedback' | 'review';
export type RateResponse = {
  response: RateInteractionPayload;
  isoDate: string;
};

export type OnboardingFlow = {
  allowed: boolean;
  extensionSent: boolean;
  mobileAppSent: boolean;
  language: string | null;
};

export type UserMetadata = {
  onboardingFlow: OnboardingFlow;
  rate: Record<Platform, RateResponse | undefined>;
};

export type PartialUserMetadata = {
  rate?: Partial<UserMetadata['rate']>;
  onboardingFlow?: Partial<UserMetadata['onboardingFlow']>;
};

export const defaultUserMetadata: UserMetadata = {
  onboardingFlow: {
    allowed: false,
    extensionSent: true,
    mobileAppSent: true,
    language: null,
  },
  rate: {
    ios: undefined,
    android: undefined,
    chromeExtension: undefined,
    safariExtension: undefined,
  },
};

export const mergeUserMetadata = (
  md1: UserMetadata,
  md2: PartialUserMetadata
): UserMetadata => {
  return {
    ...md1,
    ...md2,
    rate: {
      ...md1.rate,
      ...md2.rate,
    },
    onboardingFlow: {
      ...md1.onboardingFlow,
      ...md2.onboardingFlow,
    },
  };
};

export const mapUserMetadata = (metadata: any): UserMetadata => {
  return mergeUserMetadata(defaultUserMetadata, metadata);
};
