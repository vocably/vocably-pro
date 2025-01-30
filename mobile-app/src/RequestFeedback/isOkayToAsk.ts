import { UserMetadata } from '@vocably/model';
import { Platform } from 'react-native';

type Payload = {
  userMetadata: UserMetadata;
  numberOfRepetitions: number;
};

const platform: 'ios' | 'android' = Platform.OS === 'ios' ? 'ios' : 'android';

export const isOkayToAsk = async ({
  userMetadata,
  numberOfRepetitions,
}: Payload): Promise<boolean> => {
  if (numberOfRepetitions === 0) {
    return false;
  }

  if (
    userMetadata.rate[platform] !== undefined &&
    (userMetadata.rate[platform]?.response === 'never' ||
      userMetadata.rate[platform]?.response === 'review')
  ) {
    return false;
  }

  return numberOfRepetitions % 5 === 0;
};
