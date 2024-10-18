import { SrsItem, SrsItemState, StudyStrategy } from '@vocably/model';
import { SrsScore } from './grade';
import { spreadStrategy } from './spreadStrategy';

export const pickNextItemState = (
  item: Pick<SrsItem, 'state'>,
  score: SrsScore,
  studyStrategy: StudyStrategy
): SrsItemState => {
  const { currentState, current, next, previous } = spreadStrategy(
    item.state,
    studyStrategy
  );

  if (score > 1 && score < 5) {
    return currentState;
  }

  if (score === 5) {
    return {
      f: 0,
      s: next.step,
    };
  }

  if (
    current.allowedFailures !== null &&
    currentState.f >= current.allowedFailures
  ) {
    return {
      s: previous.step,
      f: 0,
    };
  }

  return {
    ...currentState,
    f: currentState.f + 1,
  };
};
