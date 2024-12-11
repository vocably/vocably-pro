export const shortenGender = (gender: string): string => {
  return gender
    .replace('masculine', 'm')
    .replace('neuter', 'n')
    .replace('feminine', 'f');
};
