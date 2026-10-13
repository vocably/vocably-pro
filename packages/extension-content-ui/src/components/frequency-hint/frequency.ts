export const MAX_FREQUENCY = 10;

// Frequency comes as 1 (rare) to 10 (most common).
export const frequencyToLevel = (frequency: number): 1 | 2 | 3 => {
  if (frequency >= 8) {
    return 3;
  }

  if (frequency >= 4) {
    return 2;
  }

  return 1;
};
