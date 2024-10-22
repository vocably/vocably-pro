import { Result, resultify } from '@vocably/model';
import { get } from 'lodash';
import { getOpenAiClient } from './openAiClient';
import { parseJson } from './parseJson';

export const CHAT_GPT_4O_MINI = 'gpt-4o-mini';

type OpenAiModel = typeof CHAT_GPT_4O_MINI;

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
      response_format: {
        type: 'json_object',
      },
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

  const parseResult = parseJson(
    get(completionResult, 'value.choices[0].message.content', '')
  );

  if (parseResult.success === false) {
    return {
      success: false,
      errorCode: 'OPENAI_UNABLE_TO_PARSE_RESPONSE',
      reason: 'Unable to parse the response from ChatGPT',
      extra: parseResult,
    };
  }

  return {
    success: true,
    value: parseResult.value,
  };
};
