import { translate } from './index';
import { APIGatewayProxyEvent } from 'aws-lambda';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent = {};

describe('integration check for translate lambda', () => {
  if (process.env.TEST_SKIP_MANUAL === 'true') {
    it('skip manual testing', () => {});
    return;
  }

  it('execute translate lambda', async () => {
    const result = await translate(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
  });
});
