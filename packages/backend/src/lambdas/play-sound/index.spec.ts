import { inspect } from '@vocably/sulna';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { playSound } from './index';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent = {};

describe('integration check for play-sound lambda', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('execute play sound lambda', async () => {
    mockEvent.queryStringParameters = {
      text: 'hello world',
      language: 'en',
    };
    const result = await playSound(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });
});
