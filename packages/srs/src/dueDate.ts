export const buildDueDate = (interval: number): number => {
  const now = new Date();
  return Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + interval
  );
};
