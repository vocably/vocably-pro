export const isOkayToAsk = async (
  numberOfRepetitions: number
): Promise<boolean> => {
  if (numberOfRepetitions % 5 === 0) {
    return true;
  } else {
    return false;
  }
};
