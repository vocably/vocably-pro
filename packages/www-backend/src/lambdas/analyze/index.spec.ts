import { inspect } from '@vocably/node-sulna';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { analyze } from './index';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent = {};

describe('integration check for www-backend analyze lambda', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('does not allow non-english text', async () => {
    mockEvent.queryStringParameters = {
      source: 'woord',
      targetLanguage: 'en',
      sourceLanguage: 'nl',
    };
    const result = await analyze(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(500);
  });

  it('does not allow text not from the homepage', async () => {
    mockEvent.queryStringParameters = {
      source: 'woooo',
      targetLanguage: 'ru',
      sourceLanguage: 'en',
    };
    const result = await analyze(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(500);
  });

  it('execute translate lambda', async () => {
    mockEvent.queryStringParameters = {
      source: 'words',
      targetLanguage: 'ru',
      sourceLanguage: 'en',
    };
    const result = await analyze(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });
});
