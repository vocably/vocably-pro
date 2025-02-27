import {
  GetNotificationTimeResult,
  RecalibrateNotificationsPayload,
  Result,
  SetNotificationTimePayload,
} from '@vocably/model';
import { request } from './restClient';

export const getNotificationTime = async (
  language: string
): Promise<Result<GetNotificationTimeResult>> => {
  try {
    return await request(
      '/notification-time?' +
        new URLSearchParams({
          language,
        }),
      {
        method: 'GET',
      }
    );
  } catch (e) {
    return {
      success: false,
      errorCode: 'NOTIFICATION_TIME_REQUEST_FAILED',
      reason: 'Get notification time request failed.',
      extra: e,
    };
  }
};

export const setNotificationTime = async (
  payload: SetNotificationTimePayload,
  abortController?: AbortController
): Promise<Result<any>> => {
  try {
    return await request('/notification-time', {
      method: 'POST',
      body: JSON.stringify(payload),
      signal: abortController?.signal,
    });
  } catch (e) {
    return {
      success: false,
      errorCode: 'NOTIFICATION_TIME_REQUEST_FAILED',
      reason: 'Set notification time request failed.',
      extra: e,
    };
  }
};

export const deleteNotificationTime = async (
  language: string
): Promise<Result<any>> => {
  try {
    return await request(
      '/notification-time?' +
        new URLSearchParams({
          language,
        }),
      {
        method: 'DELETE',
      }
    );
  } catch (e) {
    return {
      success: false,
      errorCode: 'NOTIFICATION_TIME_REQUEST_FAILED',
      reason: 'Delete notification time request failed.',
      extra: e,
    };
  }
};

export const recalibrateNotifications = async (
  payload: RecalibrateNotificationsPayload
): Promise<Result<any>> => {
  try {
    return await request('/recalibrate-notifications', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  } catch (e) {
    return {
      success: false,
      errorCode: 'RECALIBRATE_NOTIFICATIONS_REQUEST_FAILED',
      reason: 'Recalibrate notification request failed.',
      extra: e,
    };
  }
};
