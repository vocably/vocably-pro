export const eventTimeToCancellationTimestamp = (time: string): number => {
  const eventDate = new Date(time);
  return Date.UTC(
    eventDate.getFullYear(),
    eventDate.getMonth(),
    eventDate.getDate()
  );
};
