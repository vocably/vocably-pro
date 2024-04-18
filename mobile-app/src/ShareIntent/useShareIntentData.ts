import { useCallback, useEffect, useState } from 'react';
import ShareMenu, { ShareData } from 'react-native-share-menu';

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
    ShareMenu.getSharedText(handleShare);
  }, []);

  return sharedText;
};

function extractWord(inputString) {
  const regex = /"([^"]*)"/;
  const match = regex.exec(inputString);
  if (match) {
    return match[1];
  } else {
    return inputString;
  }
}
