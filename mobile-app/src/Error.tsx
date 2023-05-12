import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Error = FC<
  PropsWithChildren<{
    onRetry?: () => Promise<any>;
  }>
>;

export const Error: Error = ({ children, onRetry }) => {
  const [retrying, setRetrying] = useState(false);
  const retry = useCallback(() => {
    if (!onRetry) {
      return;
    }

    setRetrying(true);
    onRetry().then(() => {
      setRetrying(false);
    });
  }, [onRetry]);
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
      {onRetry && (
        <Button
          mode={'contained'}
          style={{ marginTop: 16 }}
          loading={retrying}
          onPress={retry}
        >
          Try again
        </Button>
      )}
    </View>
  );
};
