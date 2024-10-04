import { FC } from 'react';
import { Linking, ScrollView, View } from 'react-native';
import { Checkbox, Divider, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getItem, setItem } from '../asyncAppStorage';
import { Sentry } from '../BetterSentry';
import { useAsync } from '../useAsync';

const MULTI_CHOICE_ENABLED_KEY = 'isMultiChoiceEnabled';
export const getMultiChoiceEnabled = () =>
  getItem(MULTI_CHOICE_ENABLED_KEY).then((res) => res === 'true');

const setMultiChoiceEnabled = (isEnabled: boolean) =>
  setItem(MULTI_CHOICE_ENABLED_KEY, isEnabled ? 'true' : 'false');

const RANDOMIZER_ENABLED_KEY = 'isRandomizerEnabled';

export const getRandomizerEnabled = () =>
  getItem(RANDOMIZER_ENABLED_KEY).then((res) => res === 'true');

const setRandomizerEnabled = (isEnabled: boolean) =>
  setItem(RANDOMIZER_ENABLED_KEY, isEnabled ? 'true' : 'false');

type Props = {};

export const PracticeSettingsScreen: FC<Props> = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const [isMultiChoiceEnabledResult, mutateMultiChoiceEnabled] = useAsync(
    getMultiChoiceEnabled,
    setMultiChoiceEnabled
  );

  const [isRandomizerEnabled, mutateIsRandomizerEnabled] = useAsync(
    getRandomizerEnabled,
    setRandomizerEnabled
  );

  const onMultiChoicePress = () => {
    if (isMultiChoiceEnabledResult.status !== 'loaded') {
      return;
    }
    mutateMultiChoiceEnabled(!isMultiChoiceEnabledResult.value);
    if (!isMultiChoiceEnabledResult.value) {
      Sentry.captureMessage(`Multi choice enabled`);
    } else {
      Sentry.captureMessage(`Multi choice disabled`);
    }
  };

  const onRandomizerEnabledPress = () => {
    if (isRandomizerEnabled.status !== 'loaded') {
      return;
    }

    mutateIsRandomizerEnabled(!isRandomizerEnabled.value);
    if (!isRandomizerEnabled.value) {
      Sentry.captureMessage(`Randomizer enabled`);
    } else {
      Sentry.captureMessage(`Randomizer disabled`);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isMultiChoiceEnabledResult.status === 'loaded' && (
        <>
          <Checkbox.Item
            mode="android"
            position="leading"
            status={isMultiChoiceEnabledResult.value ? 'checked' : 'unchecked'}
            onPress={onMultiChoicePress}
            label="Show multi-choice questions"
            labelStyle={{
              textAlign: 'left',
              lineHeight: 16,
            }}
            style={{
              width: '100%',
            }}
          />

          <View
            style={{
              paddingLeft: insets.left + 16,
              paddingRight: 8,
              width: '100%',
              gap: 8,
            }}
          >
            <Text>
              The multi-choice questions are shown only for new cards and the
              cards that were swiped left.
            </Text>
            <Text>
              The more cards you have in your collection, the better your
              multiple-choice options will be.
            </Text>
          </View>
        </>
      )}
      <Divider style={{ width: '100%', marginVertical: 16 }} />
      {isRandomizerEnabled.status === 'loaded' && (
        <>
          <Checkbox.Item
            mode="android"
            position="leading"
            status={isRandomizerEnabled.value ? 'checked' : 'unchecked'}
            onPress={onRandomizerEnabledPress}
            label="Randomly select cards for practice"
            labelStyle={{
              textAlign: 'left',
              lineHeight: 16,
            }}
            style={{
              width: '100%',
            }}
          />
        </>
      )}
      <View
        style={{
          paddingLeft: insets.left + 16,
          paddingRight: 8,
          width: '100%',
        }}
      >
        <Text>
          Important! This option disables the SuperMemo algorithm, which was
          created to help people remember large amounts of information.{' '}
          <Text onPress={() => Linking.openURL('https://vocably.pro/srs.html')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: theme.colors.primary,
              }}
            >
              Read how Vocably uses this algorithm to help you learn more words
              in a shorter time.
            </Text>
            {''}
            <Text
              style={{
                color: theme.colors.primary,
                fontSize: 16,
              }}
            >
              {' '}
              <Icon name="open-in-new" />
            </Text>
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};
