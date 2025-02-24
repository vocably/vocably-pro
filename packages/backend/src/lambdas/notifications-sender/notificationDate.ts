export const roundNotificationDate = (date: Date): Date => {
  const now = new Date(date);
  const minutes = now.getMinutes();
  now.setMinutes(minutes < 30 ? 0 : 30);
  now.setSeconds(0);
  now.setMilliseconds(0);
  return now;
};

export const getUtcTime = (date: Date): string => {
  return date.toISOString().split('T')[1].slice(0, 5);
};

export const getUtcTimestampInSeconds = (date: Date): number => {
  return date.getTime() / 1000;
};
