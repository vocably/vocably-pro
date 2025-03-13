import { fetchUserAttributes } from '@aws-amplify/auth';
import { FetchUserAttributesOutput } from '@aws-amplify/auth/src/providers/cognito/types';
import { resultify } from '@vocably/model';

export const getFlatAttributes = (): Promise<FetchUserAttributesOutput> => {
  return new Promise(async (resolve) => {
    const userAttributeResult = await resultify(fetchUserAttributes(), {
      errorCode: 'AUTH_UNABLE_TO_GET_USER_ATTRIBUTES',
      reason: 'Unable to get user attributes',
    });

    if (userAttributeResult.success === false) {
      resolve({});
      return;
    }

    resolve(userAttributeResult.value);
  });
};
