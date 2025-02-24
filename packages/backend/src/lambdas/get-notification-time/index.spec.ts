import { inspect } from '@vocably/node-sulna';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { getNotificationTimeLambdaFunction } from './index';

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
  queryStringParameters: {
    language: 'nl',
  },
};

describe('integration check for getNotificationTime lambda', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('execute get notification tieme lambda', async () => {
    const result = await getNotificationTimeLambdaFunction(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });
});
