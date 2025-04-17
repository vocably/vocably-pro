import { useCallback, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import ShareMenu, {
  ShareData,
  ShareMenuReactView,
} from 'react-native-share-menu';

type SharedTextDefined = {
  status: 'defined';
  text: string;
};

type SharedTextUndefined = {
  status: 'undefined';
};

type SharedText = SharedTextDefined | SharedTextUndefined;

export const useSharedText = (): SharedText => {
  const [sharedText, setSharedText] = useState<SharedText>({
    status: 'undefined',
  });

  const handleShare = useCallback((data?: ShareData) => {
    if (data) {
      if (Array.isArray(data.data)) {
        setSharedText({
          status: 'defined',
          text: data.data.join(', '),
        });
      } else {
        setSharedText({
          status: 'defined',
          text: extractWord(data.data),
        });
      }
    }
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      ShareMenuReactView.data().then(({ data }) => {
        setSharedText({
          status: 'defined',
          //@ts-ignore
          text: data[0].data,
        });
      });
    } else {
      ShareMenu.getSharedText(handleShare);
    }
  }, []);

  return sharedText;
};

function extractWord(inputString: string) {
  const regex = /"([^"]*)"/;
  const match = regex.exec(inputString);
  if (match) {
    return match[1];
  } else {
    return inputString;
  }
}
