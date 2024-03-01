import {
  getUserMetadata as apiGetUserMetadata,
  saveUserMetadata as apiSaveUserMetadata,
} from '@vocably/api';
import { Result, UserMetadata } from '@vocably/model';

let userMetadata: UserMetadata | null = null;

export const getUserMetadata = async (): Promise<Result<UserMetadata>> => {
  if (userMetadata !== null) {
    return {
      success: true,
      value: userMetadata,
    };
  }

  const result = await apiGetUserMetadata();

  if (result.success === false) {
    return result;
  }

  userMetadata = result.value;

  return {
    success: true,
    value: result.value,
  };
};

export const invalidateUserMetadata = (): void => {
  userMetadata = null;
};

export const saveUserMetadata = async (
  payloadMetadata: UserMetadata
): Promise<Result<UserMetadata>> => {
  userMetadata = payloadMetadata;

  return apiSaveUserMetadata(payloadMetadata);
};
