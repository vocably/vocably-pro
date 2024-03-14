import { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ShareMenu, { ShareData } from 'react-native-share-menu';

export const Share = () => {
  const [sharedText, setSharedText] = useState<string>(
    ""
  );

  const handleShare = useCallback((data?: ShareData) => {
    if (data) {
      if (Array.isArray(data.data)) {
        setSharedText(data.data.join(', '))
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

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 24,
        borderRadius: 16,
      }}
    >
      <Text style={{ fontSize: 32 }}>{sharedText}</Text>
    </View>
  );
};
