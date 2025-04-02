import { NavigationProp, Route } from '@react-navigation/native';
import { CardItem, GoogleLanguage } from '@vocably/model';
import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Appbar, Button, IconButton, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loader } from './loaders/Loader';
import { useMnemonic } from './useMnemonic';

export type MnemonicModalParams = {
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  card: CardItem;
};

type Props = {
  route: Route<string, any>;
  navigation: NavigationProp<any>;
};

export const MnemonicModal: FC<Props> = ({ route, navigation }) => {
  const { sourceLanguage, targetLanguage, card } =
    route.params as MnemonicModalParams;
  const insets = useSafeAreaInsets();

  const theme = useTheme();

  const [mnemonicResult, regenerateMnemonic] = useMnemonic({
    sourceLanguage,
    targetLanguage,
    card: card.data,
  });

  return (
    <>
      <Appbar.Header statusBarHeight={0}>
        <Appbar.Content title="AI Mnemonics" />
        <Appbar.Action
          icon={'close'}
          size={24}
          onPress={() => navigation.goBack()}
        />
      </Appbar.Header>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={{
          paddingLeft: insets.left + 24,
          paddingRight: insets.right + 24,
          paddingBottom: insets.bottom,
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mnemonicResult.status === 'loading' && (
            <Loader>Loading mnemonic</Loader>
          )}
          {mnemonicResult.status === 'loaded' && (
            <View>
              <Markdown style={{ body: { color: theme.colors.onBackground } }}>
                {mnemonicResult.markdown}
              </Markdown>
              <IconButton
                icon={'reload'}
                style={{ marginLeft: 'auto' }}
                onPress={() => regenerateMnemonic()}
              />
            </View>
          )}
          {mnemonicResult.status === 'error' && (
            <>
              <Text>
                Unable to generate mnemonic. Please close this window and try
                again.
              </Text>
              <Button mode="contained" onPress={regenerateMnemonic}>
                Try again
              </Button>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};
