import { FC } from 'react';
import { Linking, ScrollView, View } from 'react-native';
import { Checkbox, Divider, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getItem, setItem } from '../asyncAppStorage';
import { useAsync } from '../useAsync';

const MULTI_CHOICE_ENABLED_KEY = 'isMultiChoiceEnabled';
export const getMultiChoiceEnabled = () =>
  getItem(MULTI_CHOICE_ENABLED_KEY).then((res) => res === 'true');

const setMultiChoiceEnabled = (isEnabled: boolean) =>
  setItem(MULTI_CHOICE_ENABLED_KEY, isEnabled ? 'true' : 'false');

type Props = {};

export const PracticeSettingsScreen: FC<Props> = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const [isMultiChoiceEnabledResult, mutateMultiChoiceEnabled] = useAsync(
    getMultiChoiceEnabled,
    setMultiChoiceEnabled
  );

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          paddingLeft: insets.left + 16,
          paddingRight: 8,
        }}
      >
        <Text
          style={{
            fontSize: 18,
          }}
          onPress={() => Linking.openURL('https://vocably.pro/srs.html')}
        >
          <Text
            style={{
              textDecorationLine: 'underline',
              color: theme.colors.primary,
            }}
          >
            How Vocably decides which cards to show during the practice session.
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
      </View>
      <Divider style={{ width: '100%', marginVertical: 16 }} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: insets.left + 8,
          paddingRight: 8,
          gap: 8,
        }}
      >
        {isMultiChoiceEnabledResult.status === 'loaded' && (
          <>
            <Checkbox.Item
              mode="android"
              position="leading"
              status={
                isMultiChoiceEnabledResult.value ? 'checked' : 'unchecked'
              }
              onPress={() =>
                mutateMultiChoiceEnabled(!isMultiChoiceEnabledResult.value)
              }
              label="Enable Multi-choice Answers"
              labelStyle={{
                textAlign: 'left',
              }}
              style={{
                width: '100%',
              }}
            />

            <Text>
              The more cards you have in your collection, the better your
              multiple-choice options will be.
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};
