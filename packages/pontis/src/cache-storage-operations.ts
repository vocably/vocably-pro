const CACHE_ENDPOINT = '/cache-storage';
let authCache: Cache | null | false = null;

const getCache = async (): Promise<Cache> => {
  if (authCache === false) {
    throw Error(
      "Auth cache can't be created due to the reason explained previously."
    );
  }

  if (authCache !== null) {
    return authCache;
  }

  if (!caches) {
    throw Error('Object "caches" does not exist in the global scope.');
  }

  return caches.open('auth').then((cache) => {
    authCache = cache;
    return cache;
  });
};

export const getAll = async (): Promise<Record<string, string>> => {
  const cache = await getCache();
  const response = await cache.match(CACHE_ENDPOINT);

  if (!response) {
    return {};
  }

  return response.json();
};

export const setAll = async (data: Record<string, string>) => {
  const cache = await getCache();
  const responseBody = JSON.stringify(data);
  const response = new Response(responseBody);
  await cache.put(CACHE_ENDPOINT, response);
};
