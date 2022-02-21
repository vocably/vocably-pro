import { analyze } from './index';
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
      source: 'dankjewel',
    });
    const result = await analyze(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });

  it('verify normalized keywords lambda', async () => {
    mockEvent.body = JSON.stringify({
      source: 'gemaakt',
    });
    const result = await analyze(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
    const data = JSON.parse(result.body);
    expect(data.normalized).toEqual([
      {
        source: 'gemaakt',
        sourceLanguage: 'nl',
        target: 'made',
        targetLanguage: 'en',
      },
      {
        source: 'maken',
        sourceLanguage: 'nl',
        target: 'to make',
        targetLanguage: 'en',
      },
    ]);
  });

  it('is not a big fan of unsupported languages', async () => {
    mockEvent.body = JSON.stringify({
      source: 'labas rytas',
      sourceLanguage: 'lt',
    });
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(500);
  });
});
