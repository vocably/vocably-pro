type Piwik = {
  push: (data: string[]) => void;
};

export const getPiwik = (): Piwik => {
  return (
    // @ts-ignore
    window['_paq'] ?? {
      push: () => null,
    }
  );
};

export const setUserId = (userId: string) => {
  getPiwik().push(['setUserId', userId]);
  getPiwik().push(['ping']);
};
