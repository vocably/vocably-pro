import { ScheduledEvent } from 'aws-lambda';
import { lastValueFrom, of, switchMap, tap } from 'rxjs';
import { backupCards } from './backupCards';

export const cardsBackupper = async (event: ScheduledEvent): Promise<any> =>
  lastValueFrom(of(event).pipe(tap(console.log), switchMap(backupCards)));

exports.cardsBackupper = cardsBackupper;
