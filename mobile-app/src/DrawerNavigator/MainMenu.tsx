import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Divider, Text, useTheme } from 'react-native-paper';
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
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', gap: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>
          Would you like to group cards?
        </Text>
        <Text>It can be done with tags:</Text>
        <Text>
          Swipe any existing card left and press{' '}
          <Icon name={'tag-plus'} size={16} /> button.
        </Text>
        <Text>
          Or press the{' '}
          <Icon name={'tag-plus'} color={theme.colors.primary} size={16} />{' '}
          button on a newly added card.
        </Text>
        <Text>
          When at least one tag is created, press the{' '}
          <Icon name={'tag'} size={16} /> icon on the Practice button to
          practice a selected tag or a group of selected tags.
        </Text>
        <Text>
          Swipe any tag in the list to edit or delete it. Your cards will not be
          deleted.
        </Text>
        <Text>Soon this will be available in the browser extension.</Text>
      </View>
      <Divider style={{ marginVertical: 16, width: '100%' }} />
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
