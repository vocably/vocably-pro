import { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HowToGroupCards } from '../HowToGroupCards';

type Props = {};

export const HowToGroupCardsScreen: FC<Props> = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <ScrollView>
      <View
        style={{
          justifyContent: 'center',
          paddingHorizontal: insets.left + 16,
        }}
      >
        <HowToGroupCards />
      </View>
    </ScrollView>
  );
};
