import { expect } from '@jest/globals';
import { difference } from 'lodash-es';

// @ts-ignore
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveSomeOf(expected: string): CustomMatcherResult;
    }
  }

  namespace jasmine {
    interface Matchers<T> {
      toHaveSomeOf(expected: string): CustomMatcherResult;
    }
  }
}

expect.extend({
  toHaveSomeOf(received: string, expected: string): jest.CustomMatcherResult {
    const receivedArray = received.split(',').map((s) => s.trim());
    const expectedArray = expected.split(',').map((s) => s.trim());

    const pass = difference(receivedArray, expectedArray).length === 0;

    return {
      pass,
      message: () => {
        return pass
          ? ''
          : `The received value ${received} has more values than expected: ${expected}`;
      },
    };
  },
});
