import { NavigationProp, Route } from '@react-navigation/native';
import { CardItem, GoogleLanguage } from '@vocably/model';
import { usePostHog } from 'posthog-react-native';
import React, { FC, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Appbar, Button, IconButton, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loader } from './loaders/Loader';
import { useMnemonic } from './useMnemonic';

const fixMarkdown = (markdown: string): string => {
  return markdown.replace(/["'`]+\*\*/gi, '**').replace(/\*\*["'`]+/gi, '**');
};

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

  const [upvoting, setUpvoting] = useState(false);
  const [downvoting, setDownvoting] = useState(false);

  const theme = useTheme();
  const postHog = usePostHog();

  const [mnemonicResult, regenerateMnemonic] = useMnemonic({
    sourceLanguage,
    targetLanguage,
    card: card.data,
  });

  const upvote = async () => {
    setUpvoting(true);
    postHog.capture('mnemonicUpvoted', {
      sourceLanguage,
      targetLanguage,
      card: {
        id: card.id,
        source: card.data.source,
        partOfSpeech: card.data.partOfSpeech,
      },
      mnemonicResult,
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUpvoting(false);
  };

  const downvote = async () => {
    setDownvoting(true);
    postHog.capture('mnemonicDownvoted', {
      sourceLanguage,
      targetLanguage,
      card: {
        id: card.id,
        source: card.data.source,
        partOfSpeech: card.data.partOfSpeech,
      },
      mnemonicResult,
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setDownvoting(false);
  };

  const feedback = () => {
    navigation.navigate('Feedback', {
      mnemonicSourceLanguage: sourceLanguage,
      mnemonicTargetLanguage: targetLanguage,
      mnemonicCard: card.data,
      generatedMnemonic: mnemonicResult,
    });
  };

  return (
    <>
      <Appbar.Header statusBarHeight={0}>
        <Appbar.Content title="✨ Mnemonics" />
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
            <Loader>Generating mnemonic</Loader>
          )}
          {mnemonicResult.status === 'loaded' && (
            <View style={{ width: '100%' }}>
              <View style={{ alignSelf: 'center' }}>
                <Markdown
                  style={{
                    body: { color: theme.colors.onBackground },
                    hr: {
                      backgroundColor: theme.colors.onBackground,
                    },
                  }}
                >
                  {fixMarkdown(mnemonicResult.markdown)}
                </Markdown>
              </View>
              <View
                style={{
                  marginTop: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Button
                  mode="elevated"
                  textColor={theme.colors.onBackground}
                  onPress={feedback}
                >
                  Provide Feedback
                </Button>
                <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                  <IconButton
                    icon={'thumb-up-outline'}
                    style={{ marginLeft: 'auto' }}
                    onPress={() => upvote()}
                    loading={upvoting}
                  />
                  <IconButton
                    icon={'thumb-down-outline'}
                    style={{ marginLeft: 'auto' }}
                    onPress={() => downvote()}
                    loading={downvoting}
                  />
                  <IconButton
                    icon={'reload'}
                    style={{ marginLeft: 'auto' }}
                    onPress={() => regenerateMnemonic()}
                  />
                </View>
              </View>
            </View>
          )}
          {mnemonicResult.status === 'error' && (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <Text>Error while generating mnemonic.</Text>
              {mnemonicResult.code === 'OPENAI_UNSUCCESSFUL_REQUEST' && (
                <Text>AI is so unstable nowadays!</Text>
              )}
              <Button
                style={{ marginTop: 6 }}
                mode="contained"
                onPress={regenerateMnemonic}
              >
                Try to generate again
              </Button>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};
