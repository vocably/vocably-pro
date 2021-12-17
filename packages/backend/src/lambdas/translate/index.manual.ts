import { translate } from './index';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { inspect } from '../../utils/inspect';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent = {};

describe('integration check for translate lambda', () => {
  if (process.env.TEST_SKIP_MANUAL === 'true') {
    it('skip manual testing', () => {});
    return;
  }

  it('execute translate lambda', async () => {
    mockEvent.body = JSON.stringify({
      phrase: 'dankjewel',
    });
    const result = await translate(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });

  it('is not a big fan of unsupported languages', async () => {
    mockEvent.body = JSON.stringify({
      phrase: 'labas rytas',
      language: 'lt',
    });
    const result = await translate(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(500);
  });
});
