import { translate } from './index';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { inspect } from '../../utils/inspect';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent = {};

describe('integration check for translate lambda', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
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
