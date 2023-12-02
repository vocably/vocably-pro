export const getBackupFolder = (date: Date): string => {
  const dateFormatter = Intl.DateTimeFormat('sv-SE');
  return dateFormatter.format(date);
};
