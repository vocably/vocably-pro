import { analyze } from './index';
import {
  APIGatewayEventRequestContextWithAuthorizer,
  APIGatewayProxyEvent,
} from 'aws-lambda';
import { inspect } from '../../utils/inspect';
import { Analysis } from '@vocably/model';

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
      targetLanguage: 'en',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });

  it('translates texts as is when language does not supported by lexicala', async () => {
    mockEvent.body = JSON.stringify({
      source: 'labas rytas',
      sourceLanguage: 'lt',
      targetLanguage: 'en',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
    const resultBody = JSON.parse(result.body);
    expect(resultBody.source).toEqual('labas rytas');
    expect(resultBody.translation).toBeDefined();
  });

  it('performs cheap translation on unpaid items', async () => {
    mockEvent.body = JSON.stringify({
      source: 'gedaan',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });
    mockEvent.requestContext = unpaidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
    const analysis: Analysis = JSON.parse(result.body);
    expect(analysis.source).toEqual('gedaan');
    expect(analysis.translation).toEqual({
      source: 'gedaan',
      sourceLanguage: 'nl',
      target: 'done',
      targetLanguage: 'en',
    });
    expect(analysis.items).toBeUndefined();
  });

  it('skips translation when source language equals to target language', async () => {
    mockEvent.body = JSON.stringify({
      source: 'asylum',
      targetLanguage: 'en',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
    const resultBody: Analysis = JSON.parse(result.body);
    expect(resultBody.source).toEqual('asylum');
    expect(resultBody.translation).toBeDefined();
    expect(resultBody.items.length).toBeGreaterThan(0);
    expect(resultBody.items[0].translation).toEqual('');
  });

  it('adds articles and takes translations from lexicala', async () => {
    mockEvent.body = JSON.stringify({
      source: 'veer',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
    const resultBody: Analysis = JSON.parse(result.body);
    expect(resultBody.source).toEqual('veer');
    expect(resultBody.translation).toBeDefined();
    expect(resultBody.items.length).toEqual(2);
    expect(resultBody.items[0].source).toEqual('de veer');
    expect(resultBody.items[0].translation).toEqual(
      'feather, spiral, (main)spring'
    );
    expect(resultBody.items[1].source).toEqual('het veer');
    expect(resultBody.items[1].translation).toEqual('ferry, boat');
  });

  it('adds articles and takes translations from google', async () => {
    mockEvent.body = JSON.stringify({
      source: 'veer',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
    const resultBody: Analysis = JSON.parse(result.body);
    expect(resultBody.source).toEqual('veer');
    expect(resultBody.translation).toBeDefined();
    expect(resultBody.items.length).toEqual(2);
    expect(resultBody.items[0].source).toEqual('de veer');
    expect(resultBody.items[0].translation).toEqual('пух Перо');
    expect(resultBody.items[1].source).toEqual('het veer');
    expect(resultBody.items[1].translation).toEqual('пух Перо');
  });
});
