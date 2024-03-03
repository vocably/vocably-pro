import { UserMetadata } from '@vocably/model';
import { Platform } from 'react-native';

type Payload = {
  userMetadata: UserMetadata;
  numberOfRepetitions: number;
};

const platform: 'ios' | 'android' = Platform.OS === 'ios' ? 'ios' : 'android';

export const ASK_FOR_REVIEW_AFTER = 3;

export const isOkayToAsk = async ({
  userMetadata,
  numberOfRepetitions,
}: Payload): Promise<boolean> => {
  if (
    userMetadata.rate[platform] !== undefined &&
    (userMetadata.rate[platform]?.response === 'never' ||
      userMetadata.rate[platform]?.response === 'review')
  ) {
    return false;
  }

  if (numberOfRepetitions % ASK_FOR_REVIEW_AFTER === 0) {
    return true;
  } else {
    return false;
  }
};
