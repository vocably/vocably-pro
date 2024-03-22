import { useCallback, useEffect, useState } from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
import ShareMenu, { ShareData } from 'react-native-share-menu';

export const useShare = () => {
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
  return sharedText;
}

const Share = () => {

  const sharedText = useShare();
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 24,
        borderRadius: 16,
      }}
    >
      <Text style={{ fontSize: 32 }}>{sharedText}</Text>
      <Button title='Done' onPress={() => BackHandler.exitApp()}/>
    </View>
    </View>
  );
};

export default Share;