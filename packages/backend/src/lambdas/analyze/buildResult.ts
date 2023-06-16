import {
  AnalyzePayload,
  Result,
  Analysis,
  isDirectAnalyzePayload,
} from '@vocably/model';
import { buildDirectResult } from './buildDirectResult';
import { buildReverseResult } from './buildReverseResult';

export const buildResult = async (
  payload: AnalyzePayload
): Promise<Result<Analysis>> => {
  if (isDirectAnalyzePayload(payload)) {
    return buildDirectResult(payload);
  } else {
    return buildReverseResult(payload);
  }
};
