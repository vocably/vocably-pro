type ApiOptions = {
  baseUrl: string;
  region: string;
  cardsBucket: string;
};

export let apiOptions: ApiOptions = {
  baseUrl: '',
  region: '',
  cardsBucket: '',
};

export const configureApi = (options: ApiOptions) => {
  apiOptions = options;
};
