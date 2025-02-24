import { Result } from '@vocably/model';
import { ScheduledEvent } from 'aws-lambda';
import { lastValueFrom, of, switchMap } from 'rxjs';
import { sendNotifications } from './sendNotifications';

export const notificationsSender = async (
  event: ScheduledEvent
): Promise<Result<any>> =>
  lastValueFrom(of(event).pipe(switchMap(sendNotifications)));

exports.notificationsSender = notificationsSender;
