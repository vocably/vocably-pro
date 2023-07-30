import { Analysis, ReverseAnalysis } from '@vocably/model';
import {
  APIGatewayEventRequestContextWithAuthorizer,
  APIGatewayProxyEvent,
} from 'aws-lambda';
import { inspect } from '../../utils/inspect';
import { analyze } from './index';

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

  xit('performs cheap translation on unpaid items', async () => {
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

  it('adds articles and takes translations from lexicala (nl)', async () => {
    mockEvent.body = JSON.stringify({
      source: 'regeling',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
    const resultBody: Analysis = JSON.parse(result.body);
    expect(resultBody.source).toEqual('regeling');
    expect(resultBody.translation).toBeDefined();
    expect(resultBody.items[0].source).toEqual('de regeling');
    expect(resultBody.items[0].translation).toEqual('regulation, settlement');
  });

  it('adds articles and takes translations from lexicala (de)', async () => {
    mockEvent.body = JSON.stringify({
      source: 'katzen',
      sourceLanguage: 'de',
      targetLanguage: 'en',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
    const resultBody: Analysis = JSON.parse(result.body);
    expect(resultBody.source).toEqual('katzen');
    expect(resultBody.translation).toBeDefined();
    expect(resultBody.items[0].source).toEqual('die Katze');
    expect(resultBody.items[0].translation).toEqual('cat');
  });

  it('adds articles and takes translations from google', async () => {
    mockEvent.body = JSON.stringify({
      source: 'regeling',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
    const resultBody: Analysis = JSON.parse(result.body);
    expect(resultBody.source).toEqual('regeling');
    expect(resultBody.translation).toBeDefined();
    expect(resultBody.items.length).toEqual(4);
    expect(resultBody.items[0].source).toEqual('de regeling');
    expect(resultBody.items[0].translation).toEqual('регулирование');
  });

  it('trims article before analyzing', async () => {
    mockEvent.body = JSON.stringify({
      source: 'de regeling',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
    const resultBody: Analysis = JSON.parse(result.body);
    expect(resultBody.source).toEqual('de regeling');
    expect(resultBody.translation).toBeDefined();
    expect(resultBody.items.length).toEqual(4);
    expect(resultBody.items[0].source).toEqual('de regeling');
    expect(resultBody.items[0].translation).toEqual('регулирование');
  });

  it('skips analyze when source is more than one word', async () => {
    mockEvent.body = JSON.stringify({
      source: 'vijf dagen',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
    const resultBody: Analysis = JSON.parse(result.body);
    expect(resultBody.source).toEqual('vijf dagen');
    expect(resultBody.translation).toBeDefined();
    expect(resultBody.translation.target).toEqual('five days');
    expect(resultBody.items).not.toBeDefined();
  });

  it('performs reverse analyze', async () => {
    mockEvent.body = JSON.stringify({
      target: 'правило',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });
    mockEvent.requestContext = paidRequestContext;
    const result = await analyze(mockEvent);
    expect(result.statusCode).toEqual(200);
    const resultBody: ReverseAnalysis = JSON.parse(result.body);
    console.log(inspect(resultBody));
    expect(resultBody.target).toEqual('правило');
    expect(resultBody.source).toEqual('regel');
    expect(resultBody.translation).toBeDefined();
    expect(resultBody.reverseTranslation).toBeDefined();
    expect(resultBody.items[0].source).toEqual('de regel');
    expect(resultBody.items[0].translation).toEqual('правило');
    expect(resultBody.items[1].source).toEqual('regelbaar');
    expect(resultBody.items[1].translation).toEqual('регулируемый');
  });
});
