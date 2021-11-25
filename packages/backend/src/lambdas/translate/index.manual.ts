import { translate } from './index';
import { APIGatewayProxyEvent } from 'aws-lambda';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent = {};

describe('integration check for getLatest lambda', () => {
  if (process.env.TEST_SKIP_MANUAL === 'true') {
    it('skip manual testing', () => {});
    return;
  }

  it('execute getLatest lambda with a valid Bearer token', async () => {
    mockEvent.headers = {
      Authorization: `Bearer ${process.env.TEST_ACTIVE_TOKEN}`,
    };

    mockEvent.queryStringParameters = {
      orgId: process.env.TEST_ORG_ID,
      machineId: '555',
    };

    const result = await translate(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
  });

  it('execute getLatest lambda with invalid Bearer token', async () => {
    mockEvent.headers = {
      Authorization: `Bearer ${process.env.TEST_INACTIVE_TOKEN}`,
    };

    mockEvent.queryStringParameters = {
      orgId: process.env.TEST_ORG_ID,
      machineId: '555',
    };

    const result = await translate(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(401);
  });
});
