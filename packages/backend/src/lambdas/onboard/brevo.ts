import { Result, resultify } from '@vocably/model';
import fetch from 'node-fetch';

const BREVO_API_KEY = process.env.BREVO_API_KEY as string;

type Payload = {
  email: string;
  templateId: number;
};

export const send = async ({
  email,
  templateId,
}: Payload): Promise<Result<null>> => {
  const res = await resultify(
    fetch(`https://api.brevo.com/v3/smtp/email`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'Dima from Vocably',
          email: 'd@vocably.pro',
        },
        to: [
          {
            email,
          },
        ],
        templateId: templateId,
      }),
    }).then(async (res) => {
      if (res.status > 299) {
        throw new Error(await res.text());
      }

      return res;
    }),
    {
      errorCode: 'BREVO_UNSUCCESSFUL_REQUEST',
      reason: 'Failed to perform a request to Brevo API',
    }
  );

  if (res.success === false) {
    return res;
  }

  return {
    success: true,
    value: null,
  };
};
