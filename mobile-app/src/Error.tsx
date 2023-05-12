import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
});

type Error = FC<
  PropsWithChildren<{
    onRetry?: () => Promise<any>;
  }>
>;

export const Error: Error = ({ children, onRetry }) => {
  const [retrying, setRetrying] = useState(false);
  const [nRetries, nRetriesSet] = useState(0);
  const retry = useCallback(() => {
    if (!onRetry) {
      return;
    }

    setRetrying(true);
    onRetry().then(() => {
      setTimeout(() => {
        setRetrying(false);
        nRetriesSet(nRetries + 1);
      }, 1000);
    });
  }, [onRetry, nRetries, nRetriesSet]);
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>{children}</Text>
      {onRetry && (
        <Button
          mode={'contained'}
          style={{ marginTop: 16 }}
          loading={retrying}
          onPress={retry}
        >
          Try {nRetries >= 2 ? 'harder!' : 'again'}
        </Button>
      )}
    </View>
  );
};
