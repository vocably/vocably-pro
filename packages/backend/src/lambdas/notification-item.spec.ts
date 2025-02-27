import { inspect } from '@vocably/node-sulna';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { deleteNotificationTimeLambdaFunction } from './delete-notification-time';
import { getNotificationTimeLambdaFunction } from './get-notification-time';
import { recalibrateNotificationsLambdaFunction } from './recalibrate-notifications';
import { setNotificationTimeLambdaFunction } from './set-notification-time';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent;

describe('integration check for getNotificationTime lambda', () => {
  beforeEach(() => {
    mockEvent = {
      // @ts-ignore
      requestContext: {
        authorizer: {
          claims: {
            sub: 'test-sub',
          },
        },
      },
    };
  });

  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('set notification time', async () => {
    mockEvent.body = JSON.stringify({
      language: 'en',
      localTime: '09:00',
      IANATimezone: 'Europe/Kiev',
    });
    const result = await setNotificationTimeLambdaFunction(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });

  it('get notification time', async () => {
    mockEvent.queryStringParameters = {
      language: 'en',
    };
    const result = await getNotificationTimeLambdaFunction(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
    const body = JSON.parse(result.body);

    expect(body.exists).toEqual(true);
    expect(body.language).toEqual('en');
    expect(body.time).toEqual('09:00');
  });

  it('reset notification time', async () => {
    mockEvent.body = JSON.stringify({
      language: 'en',
      localTime: '23:00',
      IANATimezone: 'Asia/Kolkata',
    });
    const result = await setNotificationTimeLambdaFunction(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });

  it('validate reset time', async () => {
    mockEvent.queryStringParameters = {
      language: 'en',
    };
    const result = await getNotificationTimeLambdaFunction(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
    const body = JSON.parse(result.body);

    expect(body.exists).toEqual(true);
    expect(body.language).toEqual('en');
    expect(body.time).toEqual('23:00');
  });

  it('recalibrate notifications lambda', async () => {
    mockEvent.body = JSON.stringify({
      IANATimezone: 'Europe/Amsterdam',
    });
    const result = await recalibrateNotificationsLambdaFunction(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });

  it('delete notification time', async () => {
    mockEvent.queryStringParameters = {
      language: 'en',
    };
    const result = await deleteNotificationTimeLambdaFunction(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });
});
