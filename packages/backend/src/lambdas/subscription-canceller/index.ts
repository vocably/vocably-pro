import { lastValueFrom, of, switchMap, map, tap } from 'rxjs';
import { ScheduledEvent } from 'aws-lambda';
import { cancelSubscriptions } from './cancelSubscriptions';
import { eventTimeToCancellationTimestamp } from './eventTimeToCancellationTimestamp';

export const subscriptionCanceller = async (
  event: ScheduledEvent
): Promise<any> =>
  lastValueFrom(
    of(event).pipe(
      tap(console.log),
      map((event) => eventTimeToCancellationTimestamp(event.time)),
      switchMap(cancelSubscriptions)
    )
  );

exports.subscriptionCanceller = subscriptionCanceller;
