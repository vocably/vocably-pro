import { analyze } from './index';
import {
  APIGatewayEventRequestContextWithAuthorizer,
  APIGatewayProxyEvent,
} from 'aws-lambda';
import { inspect } from '../../utils/inspect';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent = {};

// @ts-ignore
const paidRequestContext: APIGatewayEventRequestContextWithAuthorizer<any> = {
  authorizer: {
    claims: {
      'cognito:groups': 'some-group,paid,some-other-group',
    },
  },
};

// @ts-ignore
const unpaidRequestContext: APIGatewayEventRequestContextWithAuthorizer<any> = {
  authorizer: {
    claims: {
      'cognito:groups': 'some-group,some-other-group',
    },
  },
};

describe('integration check for translate lambda', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('execute translate lambda', async () => {
    mockEvent.body = JSON.stringify({
      source: 'dankjewel',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });

  it('verify normalized keywords lambda', async () => {
    mockEvent.body = JSON.stringify({
      source: 'gemaakt',
    });
    mockEvent.requestContext = paidRequestContext;
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
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(500);
  });

  it('stops unpaid requests', async () => {
    mockEvent.body = JSON.stringify({});
    mockEvent.requestContext = unpaidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(401);
    expect(JSON.parse(result.body)).toEqual({ error: 'UNPAID_REQUEST' });
  });
});
