type Platform = 'ios' | 'android' | 'web' | 'extension';
type RateResponse = {
  response: 'never' | 'later' | 'feedback' | 'review';
  isoDate: string;
};

export type UserMetadata = {
  rate: Record<Platform, RateResponse | undefined>;
};

const defaultUserMetadata: UserMetadata = {
  rate: {
    ios: undefined,
    android: undefined,
    web: undefined,
    extension: undefined,
  },
};

export const mergeUserMetadata = (
  md1: UserMetadata,
  md2: UserMetadata
): UserMetadata => {
  return {
    ...md1,
    rate: {
      ...md1.rate,
      ...md2.rate,
    },
    ...md2,
  };
};

export const mapUserMetadata = (metadata: any): UserMetadata => {
  return mergeUserMetadata(defaultUserMetadata, metadata);
};
