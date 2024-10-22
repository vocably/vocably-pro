import { SrsItemState, StrategyStep, StudyStrategy } from '@vocably/model';

type ReturnValue = {
  current: StrategyStep;
  next: StrategyStep;
  previous: StrategyStep;
  currentState: SrsItemState;
};

export const spreadStrategy = (
  cardState: SrsItemState | undefined,
  strategy: StudyStrategy
): ReturnValue => {
  const state = cardState ?? {
    s: strategy[0].step,
    f: 0,
  };

  let currentStepIndex = strategy.findIndex((step) => step.step === state.s);
  if (currentStepIndex === -1) {
    currentStepIndex = 0;
  }

  let nextStepIndex = currentStepIndex + 1;
  if (strategy[nextStepIndex] === undefined) {
    nextStepIndex = 0;
  }

  let previousStepIndex = currentStepIndex - 1;
  if (strategy[previousStepIndex] === undefined) {
    previousStepIndex = 0;
  }

  return {
    current: strategy[currentStepIndex],
    next: strategy[nextStepIndex],
    previous: strategy[previousStepIndex],
    currentState: state,
  };
};
