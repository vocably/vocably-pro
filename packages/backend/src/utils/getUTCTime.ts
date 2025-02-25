const getTimeZoneOffsetInMinutes = (IANATimezone: string): number => {
  const now = new Date();
  now.setSeconds(0, 0);

  // Format current time in `ianaTimeZone` as `M/DD/YYYY, HH:MM:SS`:
  const tzDateString = now.toLocaleString('en-US', {
    timeZone: IANATimezone,
    hourCycle: 'h23',
  });

  // Parse formatted date string:
  const match = /(\d+)\/(\d+)\/(\d+), (\d+):(\d+)/.exec(tzDateString);
  const [_, month, day, year, hour, min] = match.map(Number);

  // Change date string's time zone to UTC and get timestamp:
  const tzDate = new Date(year, month - 1, day, hour, min);

  // Return the offset between UTC and target time zone:
  return Math.floor((tzDate.getTime() - now.getTime()) / (1000 * 60));
};

export const getUTCTime = (
  timezoneTime: string,
  IANATimezone: string
): string => {
  const offset = getTimeZoneOffsetInMinutes(IANATimezone);
  const [hours, minutes] = timezoneTime.split(':').map(Number);

  const localDate = new Date();
  localDate.setHours(hours, minutes - offset, 0, 0);

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Etc/UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(localDate);

  const formattedDate = parts.reduce<
    Partial<Record<Intl.DateTimeFormatPartTypes, string>>
  >((acc, part) => {
    if (part.type !== 'literal') {
      acc[part.type] = part.value;
    }
    return acc;
  }, {});

  return `${formattedDate.hour}:${formattedDate.minute}`;
};
