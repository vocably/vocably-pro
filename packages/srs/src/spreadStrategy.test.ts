import { StudyStrategy } from '@vocably/model';
import { spreadStrategy } from './spreadStrategy';

describe('spreadStrategy', () => {
  it('works for a single item', () => {
    const strategy: StudyStrategy = [
      {
        step: 'sf',
        allowedFailures: null,
      },
    ];
    const { current, previous, next } = spreadStrategy(
      {
        s: 'sf',
        f: 0,
      },
      strategy
    );

    expect(current).toEqual(strategy[0]);
    expect(previous).toEqual(strategy[0]);
    expect(next).toEqual(strategy[0]);
  });

  it('works when strategy can not be defined', () => {
    const strategy: StudyStrategy = [
      {
        step: 'sf',
        allowedFailures: null,
      },
      {
        step: 'sb',
        allowedFailures: null,
      },
    ];
    const { current, previous, next } = spreadStrategy(
      {
        s: 'mb',
        f: 0,
      },
      strategy
    );

    expect(current).toEqual(strategy[0]);
    expect(previous).toEqual(strategy[0]);
    expect(next).toEqual(strategy[1]);
  });

  it('works when strategy can not be defined and is single item', () => {
    const strategy: StudyStrategy = [
      {
        step: 'sf',
        allowedFailures: null,
      },
    ];
    const { current, previous, next } = spreadStrategy(
      {
        s: 'mb',
        f: 0,
      },
      strategy
    );

    expect(current).toEqual(strategy[0]);
    expect(previous).toEqual(strategy[0]);
    expect(next).toEqual(strategy[0]);
  });

  it('properly works for the last strategy item', () => {
    const strategy: StudyStrategy = [
      {
        step: 'mf',
        allowedFailures: null,
      },
      {
        step: 'sf',
        allowedFailures: null,
      },
      {
        step: 'mb',
        allowedFailures: null,
      },
      {
        step: 'sb',
        allowedFailures: null,
      },
    ];
    const { current, previous, next } = spreadStrategy(
      {
        s: 'sb',
        f: 0,
      },
      strategy
    );

    expect(current).toEqual(strategy[3]);
    expect(previous).toEqual(strategy[2]);
    expect(next).toEqual(strategy[0]);
  });

  it('properly works for the middle strategy item', () => {
    const strategy: StudyStrategy = [
      {
        step: 'mf',
        allowedFailures: null,
      },
      {
        step: 'sf',
        allowedFailures: null,
      },
      {
        step: 'mb',
        allowedFailures: null,
      },
      {
        step: 'sb',
        allowedFailures: null,
      },
    ];
    const { current, previous, next } = spreadStrategy(
      {
        s: 'sf',
        f: 0,
      },
      strategy
    );

    expect(current).toEqual(strategy[1]);
    expect(previous).toEqual(strategy[0]);
    expect(next).toEqual(strategy[2]);
  });
});
