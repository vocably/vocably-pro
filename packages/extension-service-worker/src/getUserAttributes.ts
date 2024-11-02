import { Auth } from '@aws-amplify/auth';
import { mapUserAttributes, Result, UserData } from '@vocably/model';

export const getUserAttributes = async (): Promise<Result<UserData>> => {
  const user = await Auth.currentAuthenticatedUser().catch(() => false);

  if (!user) {
    return {
      success: false,
      errorCode: 'AUTH_UNABLE_TO_GET_USER_SESSION',
      reason: `Unable to get current user`,
    };
  }

  try {
    const attributes = await Auth.userAttributes(user);
    return {
      success: true,
      value: mapUserAttributes({ user, attributes }),
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'AUTH_UNABLE_TO_GET_USER_ATTRIBUTES',
      reason: `Unable to get current user`,
      extra: e,
    };
  }
};
