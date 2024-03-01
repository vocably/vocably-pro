import {
  mapUserMetadata,
  mergeUserMetadata,
  Result,
  UserMetadata,
} from '@vocably/model';
import { request } from './restClient';

export const getUserMetadata = async (): Promise<Result<UserMetadata>> => {
  const response = await request('/files/metadata.json', {
    method: 'GET',
  });

  if (response.success === false) {
    return response;
  }

  return {
    success: true,
    value: mapUserMetadata(response.value),
  };
};

export const saveUserMetadata = async (
  metadata: UserMetadata
): Promise<Result<UserMetadata>> => {
  const userMetadataResult = await getUserMetadata();
  if (userMetadataResult.success === false) {
    return userMetadataResult;
  }

  const toBeSaved = mergeUserMetadata(userMetadataResult.value, metadata);

  const saveResult = await request('/files/metadata.json', {
    method: 'PUT',
    body: JSON.stringify(toBeSaved),
  });

  if (!saveResult.success) {
    return saveResult;
  }

  return {
    success: true,
    value: toBeSaved,
  };
};
