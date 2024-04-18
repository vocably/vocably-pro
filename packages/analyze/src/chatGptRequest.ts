import { Result, resultify } from '@vocably/model';
import { getOpenAiClient } from './openAiClient';

export const CHAT_GPT_3_5 = 'gpt-3.5-turbo';

type OpenAiModel = typeof CHAT_GPT_3_5;

type Options = {
  prompt: string;
  model: OpenAiModel;
};

export const chatGptRequest = async ({
  prompt,
  model,
}: Options): Promise<Result<any>> => {
  const openai = await getOpenAiClient();

  const completionResult = await resultify(
    openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: model,
      temperature: 0,
      top_p: 0,
    }),
    {
      errorCode: 'OPENAI_UNSUCCESSFUL_REQUEST',
      reason: 'Unable to perform request to OpenAI',
    }
  );

  console.log(
    `Sent prompt ${prompt}. Analyzer responded with: ${JSON.stringify(
      completionResult
    )}`
  );

  if (completionResult.success === false) {
    return completionResult;
  }

  let response: unknown;
  try {
    response = JSON.parse(completionResult.value.choices[0].message.content);
  } catch (e) {
    return {
      success: false,
      errorCode: 'OPENAI_UNABLE_TO_PARSE_RESPONSE',
      reason: `Failed to parse analyzer's response as JSON: ${e}`,
    };
  }

  return {
    success: true,
    value: response,
  };
};
