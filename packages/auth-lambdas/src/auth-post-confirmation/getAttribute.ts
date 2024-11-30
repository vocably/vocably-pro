import { AdminGetUserResponse } from '@aws-sdk/client-cognito-identity-provider';

export const getAttribute = (
  user: AdminGetUserResponse,
  attributeName: string
): string | undefined => {
  return user.UserAttributes.find(
    (attribute) => attribute.Name === attributeName
  )?.Value;
};
