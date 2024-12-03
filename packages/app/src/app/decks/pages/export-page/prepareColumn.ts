export const prepareColumn = (
  value: string,
  colDelimiter: string,
  rowDelimiter: string
): string => {
  if (
    !value.includes('\n') &&
    !value.includes('\t') &&
    !value.includes(colDelimiter) &&
    !value.includes(rowDelimiter)
  ) {
    return value;
  }

  return `"${value.replace(/\"/gm, '""')}"`;
};
