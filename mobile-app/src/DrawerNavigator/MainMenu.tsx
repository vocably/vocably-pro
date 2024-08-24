import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <View style={{ width: '100%', gap: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>Group cards?</Text>
        <Text>Swipe any existing card left.</Text>
        <Text>
          Or press the <Icon name={'tag-plus'} size={16} /> icon on a newly
          added card.
        </Text>
        <Text>
          When at least one tag is created, press the{' '}
          <Icon name={'tag'} size={16} /> icon on a Practice button.
        </Text>
        <Text>Soon this will be available in the browser extension.</Text>
      </View>
      <Divider style={{ marginVertical: 12, width: '100%' }} />
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
