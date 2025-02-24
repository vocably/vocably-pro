import { inspect } from '@vocably/node-sulna';
import { ScheduledEvent } from 'aws-lambda';
import { notificationsSender } from './index';

// @ts-ignore
let mockEvent: ScheduledEvent = {
  time: '2022-04-24T18:05:24Z',
};

describe('integration check for send notifications lambda', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('works', async () => {
    const result = await notificationsSender(mockEvent);
    console.log(inspect({ result }));
    expect(result.success).toBeTruthy();
  });
});
