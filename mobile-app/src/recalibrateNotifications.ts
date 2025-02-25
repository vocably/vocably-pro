import { Auth } from '@aws-amplify/auth';
import { recalibrateNotifications as recalibrateNotificationApi } from '@vocably/api';
import { resultify } from '@vocably/model';
import { getTimeZone } from 'react-native-localize';
import { getItem, setItem } from './asyncAppStorage';

const getTodayTimestamp = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  return Math.floor(date.getTime() / 1000);
};

const lastRecalibrationKey = 'last-recalibration';

export const recalibrateNotifications = async () => {
  console.log('Recalibrating notifications');

  const currentUserResult = await resultify(Auth.currentAuthenticatedUser(), {
    errorCode: 'AUTH_UNABLE_TO_GET_USER_SESSION',
    reason: 'Unable to get current user',
  });

  if (currentUserResult.success === false) {
    console.log(
      'Unable to recalibrate notifications. User is quite likely not logged in.',
      currentUserResult
    );
    return;
  }

  const timestamp = getTodayTimestamp();

  const lastRecalibrationTimestamp =
    Number(await getItem(lastRecalibrationKey)) || 0;

  if (lastRecalibrationTimestamp >= timestamp) {
    console.log(
      'Recalibration is not necessary because it has already happened today.'
    );
    return;
  }

  const recalibrateResponse = await recalibrateNotificationApi({
    IANATimezone: getTimeZone(),
  });

  if (recalibrateResponse.success === false) {
    console.error('Unable to recalibrate notification', recalibrateResponse);
  }

  await setItem(lastRecalibrationKey, timestamp.toString());

  console.log('Recalibration is succeeded.');
};
