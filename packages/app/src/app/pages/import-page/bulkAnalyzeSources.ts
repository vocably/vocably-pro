import { bulkAnalyze } from '@vocably/api';
import { GoogleLanguage } from '@vocably/model';
import { chunk } from 'lodash-es';
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
    subscriber.add(() => {
      stillWorking = false;
      abortController.abort();
    });

    cache[language] = cache[language] ?? {};
    const cachedValues = cache[language] as Record<string, string>;

    const asyncAnalyze = async () => {
      const sourceBatches = chunk(sources, 10);

      for (let i = 0; i < sourceBatches.length && stillWorking; i++) {
        const sourceBatch = sourceBatches[i].filter(
          (source) => cachedValues[source] === undefined
        );
        if (sourceBatch.length > 0) {
          const bulkAnalyzeResult = await bulkAnalyze(
            {
              sources: sourceBatch,
              sourceLanguage: language,
            },
            abortController
          );

          if (bulkAnalyzeResult.success) {
            for (let analysis of bulkAnalyzeResult.value.analysis) {
              cachedValues[analysis.source] = analysis.partOfSpeech;
            }
          }
        }
        subscriber.next(
          sourceBatches[i].reduce((acc, source) => {
            return {
              ...acc,
              [source]: cachedValues[source],
            };
          }, {})
        );
      }

      subscriber.complete();
    };

    asyncAnalyze().then();
  });
