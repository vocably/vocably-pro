import { useCallback, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import ShareMenu, { ShareData, ShareMenuReactView } from 'react-native-share-menu';

export const useShareIntentData = () => {
  const [sharedText, setSharedText] = useState<string>('');

  const handleShare = useCallback((data?: ShareData) => {
    if (data) {
      if (Array.isArray(data.data)) {
        setSharedText(data.data.join(', '));
      } else {
        setSharedText(extractWord(data.data));
      }
    }
  }, []);

  useEffect(() => {

  }, []);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      ShareMenuReactView.data().then(({ mimeType, data }) => {
        //@ts-ignore
        setSharedText(data[0].data);
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
