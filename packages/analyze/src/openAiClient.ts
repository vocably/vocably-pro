import type OpenAI from 'openai';
import { config } from './config';
let cachedOpenAiClient: OpenAI | null = null;
export const getOpenAiClient = async () => {
  if (cachedOpenAiClient === null) {
    const { OpenAI } = await import('openai');
    cachedOpenAiClient = new OpenAI({
      apiKey: config.openaiApiKey,
    });
  }

  return cachedOpenAiClient;
};
