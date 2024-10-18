import { SrsItemState, StudyStrategy } from '@vocably/model';
import { pickNextItemState } from './pickNextItemState';

describe('pickNextItemState', () => {
  it('should keep the state on swipe down', () => {
    const nextItemState = pickNextItemState(
      {
        state: {
          s: 'sb',
          f: 2,
        },
      },
      3,
      [
        {
          step: 'sf',
          allowedFailures: null,
        },
        {
          step: 'sb',
          allowedFailures: 0,
        },
      ]
    );

    expect(nextItemState).toEqual({
      s: 'sb',
      f: 2,
    });
  });

  it('should select sf on swiping sb left', () => {
    const nextItemState = pickNextItemState(
      {
        state: {
          s: 'sb',
          f: 0,
        },
      },
      1,
      [
        {
          step: 'sf',
          allowedFailures: null,
        },
        {
          step: 'sb',
          allowedFailures: 0,
        },
      ]
    );

    expect(nextItemState).toEqual({
      s: 'sf',
      f: 0,
    });
  });

  it('should select sf on swiping sb left', () => {
    const nextItemState = pickNextItemState(
      {
        state: {
          s: 'sb',
          f: 0,
        },
      },
      1,
      [
        {
          step: 'sf',
          allowedFailures: null,
        },
        {
          step: 'sb',
          allowedFailures: 0,
        },
      ]
    );

    expect(nextItemState).toEqual({
      s: 'sf',
      f: 0,
    });
  });

  it('should select sf on swiping sb left', () => {
    const nextItemState = pickNextItemState(
      {
        state: {
          s: 'sb',
          f: 0,
        },
      },
      1,
      [
        {
          step: 'sf',
          allowedFailures: null,
        },
        {
          step: 'sb',
          allowedFailures: 0,
        },
      ]
    );

    expect(nextItemState).toEqual({
      s: 'sf',
      f: 0,
    });
  });

  it('should select sf on swiping sb left', () => {
    const nextItemState = pickNextItemState(
      {
        state: {
          s: 'sb',
          f: 0,
        },
      },
      1,
      [
        {
          step: 'sf',
          allowedFailures: null,
        },
        {
          step: 'sb',
          allowedFailures: 0,
        },
      ]
    );

    expect(nextItemState).toEqual({
      s: 'sf',
      f: 0,
    });
  });

  it('should select sf on swiping sb right', () => {
    const nextItemState = pickNextItemState(
      {
        state: {
          s: 'sb',
          f: 0,
        },
      },
      5,
      [
        {
          step: 'sf',
          allowedFailures: null,
        },
        {
          step: 'sb',
          allowedFailures: 0,
        },
      ]
    );

    expect(nextItemState).toEqual({
      s: 'sf',
      f: 0,
    });
  });

  it('should select sf on swiping sb right', () => {
    const nextItemState = pickNextItemState(
      {
        state: {
          s: 'sb',
          f: 0,
        },
      },
      5,
      [
        {
          step: 'sf',
          allowedFailures: null,
        },
        {
          step: 'sb',
          allowedFailures: 0,
        },
      ]
    );

    expect(nextItemState).toEqual({
      s: 'sf',
      f: 0,
    });
  });

  it('should stay on mb for couple of times and then go back', () => {
    const strategy: StudyStrategy = [
      {
        step: 'mf',
        allowedFailures: null,
      },
      {
        step: 'sf',
        allowedFailures: 0,
      },
      {
        step: 'mb',
        allowedFailures: 1,
      },
      {
        step: 'sb',
        allowedFailures: 0,
      },
    ];

    let state: SrsItemState = {
      s: 'mf',
      f: 0,
    };

    state = pickNextItemState(
      {
        state,
      },
      5,
      strategy
    );

    expect(state).toEqual({
      s: 'sf',
      f: 0,
    });

    state = pickNextItemState(
      {
        state,
      },
      5,
      strategy
    );

    expect(state).toEqual({
      s: 'mb',
      f: 0,
    });

    state = pickNextItemState(
      {
        state,
      },
      1,
      strategy
    );

    expect(state).toEqual({
      s: 'mb',
      f: 1,
    });

    state = pickNextItemState(
      {
        state,
      },
      1,
      strategy
    );

    expect(state).toEqual({
      s: 'sf',
      f: 0,
    });

    state = pickNextItemState(
      {
        state,
      },
      5,
      strategy
    );

    expect(state).toEqual({
      s: 'mb',
      f: 0,
    });

    state = pickNextItemState(
      {
        state,
      },
      5,
      strategy
    );

    expect(state).toEqual({
      s: 'sb',
      f: 0,
    });

    state = pickNextItemState(
      {
        state,
      },
      1,
      strategy
    );

    expect(state).toEqual({
      s: 'mb',
      f: 0,
    });

    state = pickNextItemState(
      {
        state,
      },
      5,
      strategy
    );

    expect(state).toEqual({
      s: 'sb',
      f: 0,
    });

    state = pickNextItemState(
      {
        state,
      },
      5,
      strategy
    );

    expect(state).toEqual({
      s: 'mf',
      f: 0,
    });
  });
});
