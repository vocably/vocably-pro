import { bulkAnalyze } from '@vocably/api';
import { GoogleLanguage } from '@vocably/model';
import { createQueue } from '@vocably/sulna';
import { chunk, pick } from 'lodash-es';
import { Observable } from 'rxjs';

const cache: Partial<Record<GoogleLanguage, Record<string, string>>> = {};

type AnalyzedSources = Array<{
  source: string;
  partOfSpeech: string;
}>;

export const bulkAnalyzeSources = (
  language: GoogleLanguage,
  sources: string[]
) =>
  new Observable<Record<string, string>>((subscriber) => {
    let stillWorking = true;
    const abortController = new AbortController();
    const { queue, tearDownQueue } = createQueue(3);

    subscriber.add(() => {
      stillWorking = false;
      tearDownQueue();
      abortController.abort();
    });

    if (cache[language] === undefined) {
      cache[language] = {};
    }
    const cachedValues = cache[language] as Record<string, string>;

    const promises = chunk(sources, 10).map((batch) => {
      return queue(async () => {
        const unAnalyzed = batch.filter(
          (source) => cachedValues[source] === undefined
        );

        const bulkAnalyzeResult = await bulkAnalyze(
          {
            sources: unAnalyzed,
            sourceLanguage: language,
          },
          abortController
        );

        if (bulkAnalyzeResult.success === true) {
          bulkAnalyzeResult.value.analysis.forEach((item, index) => {
            cachedValues[item.source] = item.partOfSpeech;
          });
        }

        subscriber.next(pick(cachedValues, batch));
      });
    });

    Promise.all(promises).then(() => {
      if (stillWorking) {
        subscriber.complete();
        stillWorking = false;
      }
    });
  });
