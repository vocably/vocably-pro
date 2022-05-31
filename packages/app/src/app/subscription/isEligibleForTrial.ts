import { UserData } from '@vocably/model';

export const isEligibleForTrial = (userData: UserData): boolean => {
  return userData.status !== 'deleted';
};
