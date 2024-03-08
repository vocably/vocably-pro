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

export type UserMetadata = {
  rate: Record<Platform, RateResponse | undefined>;
};

export type PartialUserMetadata = Partial<UserMetadata> & {
  rate?: Partial<UserMetadata['rate']>;
};

export const defaultUserMetadata: UserMetadata = {
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
  };
};

export const mapUserMetadata = (metadata: any): UserMetadata => {
  return mergeUserMetadata(defaultUserMetadata, metadata);
};
