import { Result, resultify } from '@vocably/model';
import { get } from 'lodash';
import OpenAI from 'openai';
import { getOpenAiClient } from './openAiClient';
import { parseJson } from './parseJson';
import ChatCompletionMessageParam = OpenAI.ChatCompletionMessageParam;

export const GPT_4O_MINI = 'gpt-4o-mini';
export const GPT_4O = 'gpt-4o';

type OpenAiModel = typeof GPT_4O_MINI | typeof GPT_4O;

type Options = {
  messages: Array<ChatCompletionMessageParam>;
  model: OpenAiModel;
};

export const chatGptRequest = async ({
  messages,
  model,
}: Options): Promise<Result<any>> => {
  const openai = await getOpenAiClient();

  const completionResult = await resultify(
    openai.chat.completions.create({
      messages: messages,
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
    `Sent prompt ${JSON.stringify(
      messages
    )}. Analyzer responded with: ${JSON.stringify(completionResult)}`
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
