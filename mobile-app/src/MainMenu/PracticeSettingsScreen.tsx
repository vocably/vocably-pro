import { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { Checkbox, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: insets.left,
        paddingBottom: insets.bottom,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          paddingHorizontal: 16,
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
