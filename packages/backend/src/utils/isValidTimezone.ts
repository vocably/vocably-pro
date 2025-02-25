export const isValidTimeZone = (timeZone: string) => {
  try {
    Intl.DateTimeFormat(undefined, { timeZone });
    return true;
  } catch (e) {
    return false;
  }
};
