import { FC, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  loadingMessageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Loader = PropsWithChildren<{
  isLoading: boolean;
}>;

export const OverlayLoader: FC<Loader> = ({ children, isLoading }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {children}
      {isLoading && (
        <>
          <View
            style={[
              styles.overlay,
              {
                backgroundColor: theme.colors.background,
              },
            ]}
          ></View>
          <View style={styles.loadingMessageContainer}>
            <ActivityIndicator />
          </View>
        </>
      )}
    </View>
  );
};
