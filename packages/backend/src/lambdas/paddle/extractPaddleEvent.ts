import { isPassThrough } from '@vocably/model';
import {
  alertSubscriptionCancelled,
  alertSubscriptionCreated,
  alertSubscriptionPaymentSucceeded,
  alertSubscriptionUpdated,
  PaddleEvent,
  PaddleRawBody,
} from './types';

const availableEvents = [
  alertSubscriptionCreated,
  alertSubscriptionUpdated,
  alertSubscriptionCancelled,
  alertSubscriptionPaymentSucceeded,
];

export const extractPaddleEvent = (body: PaddleRawBody): PaddleEvent => {
  if (!availableEvents.includes(body.alert_name)) {
    console.error(`Unavailable subscription event ${body.alert_name}.`);
    throw Error(`Unavailable subscription event ${body.alert_name}.`);
  }

  let passThrough: any;

  try {
    passThrough = JSON.parse(body.passthrough);
  } catch {
    console.error(
      `Passthrough data ${body.passthrough} can not be properly parsed.`
    );
    throw Error(
      `Passthrough data ${body.passthrough} can not be properly parsed.`
    );
  }

  if (!isPassThrough(passThrough)) {
    console.error(
      `Passthrough data ${body.passthrough} is not a valid PassThrough object.`
    );
    throw Error(
      `Passthrough data ${body.passthrough} is not a valid PassThrough object.`
    );
  }

  // @ts-ignore
  return {
    ...body,
    passthrough: passThrough,
  };
};
