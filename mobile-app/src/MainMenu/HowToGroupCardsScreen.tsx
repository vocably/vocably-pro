import { FC } from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};

export const HowToGroupCardsScreen: FC<Props> = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
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
    </SafeAreaView>
  );
};
