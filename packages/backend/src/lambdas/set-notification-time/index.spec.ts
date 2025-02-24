import { inspect } from '@vocably/node-sulna';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { setNotificationTimeLambdaFunction } from './index';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent = {
  // @ts-ignore
  requestContext: {
    authorizer: {
      claims: {
        sub: 'dd5cbec6-2b47-47b1-8fdb-441b8157ef7b',
      },
    },
  },
};

describe('integration check for getNotificationTime lambda', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('execute set notification to,e lambda', async () => {
    mockEvent.body = JSON.stringify({
      language: 'en',
      localTime: '09:00',
      IANATimezone: 'Europe/Kiev',
    });
    const result = await setNotificationTimeLambdaFunction(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });
});
