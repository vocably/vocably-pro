import {
  isFacilityOnboardedAction,
  isUserLoggedInAction,
  OnboardingAction,
  Result,
} from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';

export type UsefulData = {
  action: OnboardingAction;
  sub: string;
  email: string;
};

export const extractUsefulData = (
  event: APIGatewayProxyEvent
): Result<UsefulData> => {
  const action = JSON.parse(event.body ?? '{}');

  if (!isFacilityOnboardedAction(action) && !isUserLoggedInAction(action)) {
    return {
      success: false,
      errorCode: 'ONBOARDING_POST_MALFORMED_PAYLOAD',
      reason: 'Unable to detect the type of payload',
      extra: { payload: action },
    };
  }

  const claims = event.requestContext?.authorizer?.claims ?? {};
  const sub = claims['sub'] ?? '';
  const email = claims['email'] ?? '';

  if (!sub || !email) {
    return {
      success: false,
      errorCode: 'ONBOARDING_POST_MALFORMED_PAYLOAD',
      reason: `Unable to process sub='${sub}', email='${email}''`,
    };
  }

  return {
    success: true,
    value: {
      action,
      sub,
      email,
    },
  };
};
