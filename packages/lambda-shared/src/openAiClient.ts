import type OpenAI from 'openai';

type ClientOptions = {
  apiKey?: string;
};

const config: ClientOptions = {};

export const setOpenAIConfig = (options: ClientOptions) => {
  Object.assign(config, options);
};

let cachedOpenAiClient: OpenAI | null = null;
export const getOpenAiClient = async () => {
  if (cachedOpenAiClient === null) {
    const { OpenAI } = await import('openai');
    cachedOpenAiClient = new OpenAI({
      apiKey: config.apiKey,
    });
  }

  return cachedOpenAiClient;
};
