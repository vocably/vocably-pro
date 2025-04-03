import { generateMnemonic as apiGenerateMnemonic } from '@vocably/api';
import { GenerateMnemonicPayload } from '@vocably/model';
import { usePostHog } from 'posthog-react-native';
import { useEffect, useState } from 'react';

type State =
  | {
      status: 'loading';
    }
  | {
      status: 'error';
      code: string;
    }
  | {
      status: 'loaded';
      markdown: string;
    };

export const useMnemonic = (
  payload: GenerateMnemonicPayload
): [State, () => Promise<any>] => {
  const [state, setState] = useState<State>({
    status: 'loading',
  });

  const postHog = usePostHog();

  const generateMnemonic = async () => {
    setState({
      status: 'loading',
    });

    postHog.capture('mnemonicGenerate', {
      ...payload,
    });

    const mnemonicResult = await apiGenerateMnemonic(payload);
    if (mnemonicResult.success === false) {
      setState({
        status: 'error',
        code: mnemonicResult.errorCode,
      });

      return;
    }

    setState({
      status: 'loaded',
      markdown: mnemonicResult.value.text,
    });
  };

  useEffect(() => {
    generateMnemonic();
  }, []);

  return [state, generateMnemonic];
};
