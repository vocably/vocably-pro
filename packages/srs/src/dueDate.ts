export const buildDueDate = (interval: number): number => {
  const now = new Date();
  return +new Date(now.getFullYear(), now.getMonth(), now.getDate() + interval);
};
