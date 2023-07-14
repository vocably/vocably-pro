import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

type MainMenu = FC<{}>;

export const MainMenu: MainMenu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 12 }}>
        Are you missing any crucial feature or simply want to share your opinion
        about Vocably with me? I would love to hear from you!
      </Text>
      <View
        style={{
          alignSelf: 'stretch',
        }}
      >
        <Button
          mode={'contained'}
          onPress={() => navigation.navigate('Feedback')}
        >
          Provide Feedback
        </Button>
      </View>
    </View>
  );
};
