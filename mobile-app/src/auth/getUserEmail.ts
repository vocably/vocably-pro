import { CognitoUser } from '@aws-amplify/auth';
import { Result } from '@vocably/model';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { isCognitoUser } from './isCognitoUser';

const getSession = async (
  user: CognitoUser
): Promise<Result<CognitoUserSession | null>> => {
  return new Promise((resolve) => {
    user.getSession((error: Error, session: CognitoUserSession | null) => {
      if (error) {
        resolve({
          success: false,
          errorCode: 'AUTH_UNABLE_TO_GET_USER_SESSION',
          reason: "The app can't get user session",
          extra: error,
        });

        return;
      }

      resolve({
        success: true,
        value: session,
      });
    });
  });
};

export const getUserEmail = (
  user: CognitoUser | any
): Promise<string | null> => {
  return new Promise(async (resolve) => {
    if (!isCognitoUser(user)) {
      return resolve(null);
    }

    const sessionResult = await getSession(user);

    if (sessionResult.success === false) {
      resolve(null);
      return;
    }

    user.getUserAttributes((error, attributes) => {
      if (error) {
        return resolve(null);
      }

      if (!attributes) {
        return resolve(null);
      }

      const emailAttribute = attributes.find(
        (attr) => attr.getName() === 'email'
      );

      if (!emailAttribute) {
        return resolve(null);
      }

      return resolve(emailAttribute.getValue());
    });
  });
};
