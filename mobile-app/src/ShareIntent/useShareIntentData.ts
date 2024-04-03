import { useCallback, useEffect, useState } from "react";
import ShareMenu, { ShareData } from "react-native-share-menu";

export const useShareIntentData = () => {
    const [sharedText, setSharedText] = useState<string>('');
  
    const handleShare = useCallback((data?: ShareData) => {
      if (data) {
        if (Array.isArray(data.data)) {
          setSharedText(data.data.join(', '));
        } else {
          setSharedText(data.data);
        }
      }
    }, []);
  
    useEffect(() => {
      ShareMenu.getInitialShare(handleShare);
    }, []);
  
    useEffect(() => {
      const listener = ShareMenu.addNewShareListener(handleShare);
  
      return () => {
        listener.remove();
      };
    }, []);
    return sharedText;
  };