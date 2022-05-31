import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

export const getAttributeValue = <T extends string>(
  attribute: CognitoUserAttribute | undefined
): T | undefined => {
  if (attribute === undefined) {
    return undefined;
  }

  return attribute.getValue() as T;
};
