type PING_GOOGLE_STATUS = 'SUCCESS' | 'HTTP_FAILED' | 'HTTP_ERROR';

export const pingGoogle = async (): Promise<PING_GOOGLE_STATUS> => {
  try {
    const result = await fetch('https://www.google.com/generate_204');
    if (result.ok) {
      return 'SUCCESS';
    } else {
      console.error(result);
      return 'HTTP_ERROR';
    }
  } catch (e) {
    console.error(e);
    return 'HTTP_FAILED';
  }
};
