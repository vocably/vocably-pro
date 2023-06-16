import { APIGatewayProxyEvent } from 'aws-lambda';
import { inspect } from '../../utils/inspect';
import { paddle } from './index';
import { events } from './_mocks/events';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent = {};

describe('integration check for paddle lambda', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('execute subscription created event', async () => {
    mockEvent.body = events.createSubscription;

    const result = await paddle(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });

  it('executes subscription cancel event', async () => {
    mockEvent.body = events.cancelSubscription;

    const result = await paddle(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });
});
