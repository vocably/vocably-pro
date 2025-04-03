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

type HelperTranslation = {
  text: string;
  okay: string;
};

const helpText: Record<any, HelperTranslation> = {
  en: {
    text: `Some words are just hard to remember—they refuse to stick.

Vocably helps by generating mnemonics for tricky words.

Mnemonics are memory techniques that use associations, rhymes, imagery, or other cognitive links to make learning easier.

The AI mnemonic generator is an experimental feature. I'm not sure if it will stick around or fade away as unnecessary.

Give it a try, and if you're up for it, let me know what you think.`,
    okay: `Alright`,
  },

  ru: {
    text: `Не все слова легко запомнить. Некоторые просто не лезут в голову.

Вокебли позволяет генерировать мнемоники для сложных слов.

Мнемоники — это приемы и техники, которые помогают запоминать информацию с помощью ассоциаций, рифм, образов или других когнитивных связей.

AI-генератор мнемоник — это эксперементальная функция проекта. Я не уверен, останется ли она в будущем или уйдёт как ненужная.

Попробуйте воспользоваться этой функциональностью и если появится желание, то сообщите мне что вы о ней думаете.`,
    okay: 'Хорошо',
  },

  uk: {
    text: `Не всі слова легко запам’ятати. Деякі просто не хочуть вкладатися в голову.

Вокеблі дозволяє генерувати мнемоніки для складних слів.

Мнемоніки — це прийоми та техніки, які допомагають запам’ятовувати інформацію за допомогою асоціацій, рим, образів або інших когнітивних зв’язків.

AI-генератор мнемонік — це експериментальна функція проєкту. Я не впевнений, чи залишиться вона в майбутньому, чи зникне як непотрібна.

Спробуйте скористатися цією функцією, і якщо у вас з’являться думки з цього приводу, поділіться ними зі мною.`,
    okay: 'Добре',
  },
};

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
  const [votedFor, setVotedFor] = useState('');
  const [helpIsOpen, setHelpIsOpen] = useState(false);

  const theme = useTheme();
  const postHog = usePostHog();

  const markdownStyles = {
    body: { color: theme.colors.onBackground, fontSize: 18 },
    hr: {
      backgroundColor: theme.colors.onBackground,
    },
  };

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
    await new Promise((resolve) => setTimeout(resolve, 200));
    setUpvoting(false);
    setVotedFor('upvoted');
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
    await new Promise((resolve) => setTimeout(resolve, 200));
    setDownvoting(false);
    setVotedFor('downvoted');
  };

  const feedback = () => {
    navigation.navigate('Feedback', {
      mnemonicSourceLanguage: sourceLanguage,
      mnemonicTargetLanguage: targetLanguage,
      mnemonicCard: card.data,
      generatedMnemonic: mnemonicResult,
    });
  };

  const translation = helpText[targetLanguage] ?? helpText['en'];

  return (
    <>
      <Appbar.Header statusBarHeight={0}>
        <Appbar.Action
          icon={'help-circle-outline'}
          size={24}
          onPress={() => setHelpIsOpen(!helpIsOpen)}
        />
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
          flexGrow: 1,
        }}
      >
        {helpIsOpen && (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 16,
            }}
          >
            <Markdown style={markdownStyles}>{translation.text}</Markdown>
            <Button
              style={{ width: '100%', marginTop: 24 }}
              mode="outlined"
              onPress={() => setHelpIsOpen(false)}
            >
              {translation.okay}
            </Button>
          </View>
        )}
        {!helpIsOpen && (
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
                  <Markdown style={markdownStyles}>
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
                      icon={
                        votedFor === 'upvoted' ? 'thumb-up' : 'thumb-up-outline'
                      }
                      style={{ marginLeft: 'auto' }}
                      onPress={() => upvote()}
                      loading={upvoting}
                    />
                    <IconButton
                      icon={
                        votedFor === 'downvoted'
                          ? 'thumb-down'
                          : 'thumb-down-outline'
                      }
                      style={{ marginLeft: 'auto' }}
                      onPress={() => downvote()}
                      loading={downvoting}
                    />
                    <IconButton
                      icon={'reload'}
                      style={{ marginLeft: 'auto' }}
                      onPress={() => {
                        setVotedFor('');
                        regenerateMnemonic();
                      }}
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
        )}
      </ScrollView>
    </>
  );
};
