import { FC } from 'react';
import { Linking, ScrollView, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelectedDeck } from '../languageDeck/useSelectedDeck';

type Props = {};

export const HowToImportAndExportScreen: FC<Props> = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const { deck } = useSelectedDeck({ autoReload: false });

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        paddingHorizontal: insets.left + 16,
        gap: 16,
        height: '100%',
      }}
    >
      <Text style={{ fontSize: 18 }}>
        Import and Export functionality is available in the Web App.
      </Text>
      <Text style={{ fontSize: 18 }}>Login with your account to proceed.</Text>
      <View style={{ flexDirection: 'row', gap: 24 }}>
        <Text onPress={() => Linking.openURL('https://app.vocably.pro/import')}>
          <Text
            style={{
              fontSize: 18,
              color: theme.colors.primary,
              textDecorationLine: 'underline',
            }}
          >
            Import
          </Text>{' '}
          <Icon
            name="open-in-new"
            size={16}
            color={'primary'}
            style={{ marginLeft: 16, color: theme.colors.primary }}
          />
        </Text>
        <Text
          onPress={() =>
            Linking.openURL(
              `https://app.vocably.pro/deck/${deck.language}/edit/export`
            )
          }
        >
          <Text
            style={{
              fontSize: 18,
              color: theme.colors.primary,
              textDecorationLine: 'underline',
            }}
          >
            Export
          </Text>{' '}
          <Icon
            name="open-in-new"
            size={16}
            color={'primary'}
            style={{ marginLeft: 16, color: theme.colors.primary }}
          />
        </Text>
      </View>
    </ScrollView>
  );
};
