import { FC } from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HowToGroupCards } from '../HowToGroupCards';

type Props = {};

export const HowToGroupCardsScreen: FC<Props> = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        paddingHorizontal: insets.left + 16,
        height: '100%',
      }}
    >
      <HowToGroupCards />
    </ScrollView>
  );
};
