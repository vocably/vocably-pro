export const createQueue = (limit = 3) => {
  const queue: Array<{
    fn: () => Promise<unknown>;
    resolve: (value: unknown) => void;
    reject: (reason: any) => void;
  }> = [];
  let activeCount = 0;

  const runNext = () => {
    if (activeCount < limit && queue.length > 0) {
      activeCount++;
      const { fn, resolve, reject } = queue.shift();
      fn()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          activeCount--;
          runNext();
        });
    }
  };

  return {
    queue: <T>(fn: () => Promise<T>): Promise<T> => {
      return new Promise<T>((resolve, reject) => {
        queue.push({ fn, resolve, reject });
        runNext();
      });
    },
    tearDownQueue: () => {
      queue.length = 0;
    },
  };
};
