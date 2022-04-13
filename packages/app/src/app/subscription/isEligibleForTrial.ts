import { UserData } from '../auth/auth.service';

export const isEligibleForTrial = (userData: UserData): boolean => {
  return userData.status !== 'deleted';
};
