import { NavigationProp, Route } from '@react-navigation/native';
import { CardItem, TagItem } from '@vocably/model';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  Button,
  Chip,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelectedDeck } from './languageDeck/useSelectedDeck';
import { mainPadding } from './styles';
import { TagsSelector } from './TagsSelector';

const styles = StyleSheet.create({
  inputItem: {
    marginBottom: 24,
    textAlign: 'auto',
  },
});

export type EditCardParams = {
  card: CardItem;
};

type EditCardScreen = FC<{
  route: Route<string, any>;
  navigation: NavigationProp<any>;
}>;

export const EditCardScreen: EditCardScreen = ({ route, navigation }) => {
  const deck = useSelectedDeck({
    autoReload: false,
  });

  const { card } = route.params as EditCardParams;
  const [cardData, setCardData] = useState({ ...card.data });
  const [isUpdating, setIsUpdating] = useState(false);
  const [savingTags, setSavingTags] = useState(false);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    setCardData({ ...card.data });
  }, [card]);

  const onTextChange = useCallback(
    (paramName: keyof CardItem['data']) => (value: string) => {
      setCardData((cardData) => ({
        ...cardData,
        [paramName]: value,
      }));
    },
    [cardData]
  );

  const onUpdate = useCallback(async () => {
    setIsUpdating(true);
    const updateResult = await deck.update(card.id, cardData);
    if (updateResult.success === false) {
      Alert.alert(
        'Error: Card update failed',
        `Oops! Something went wrong while attempting to update the card. Please try again.`
      );
    }
    navigation.goBack();
  }, [cardData, deck.update, card]);

  const onTagsChange = async (tags: TagItem[]) => {
    cardData.tags = tags;
    setSavingTags(true);
    const updateResult = await deck.update(card.id, cardData);
    setSavingTags(false);
    if (updateResult.success === false) {
      Alert.alert(
        'Error: Card update failed',
        `Oops! Something went wrong while attempting to update the card. Please try again.`
      );
    }
  };

  const theme = useTheme();
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Edit Card" />
        <Appbar.Action
          icon={'check'}
          size={32}
          loading={isUpdating}
          disabled={isUpdating}
          onPress={onUpdate}
          color={theme.colors.primary}
        />
      </Appbar.Header>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={{
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            padding: mainPadding,
          }}
        >
          <View style={{ marginBottom: 24, alignItems: 'flex-start' }}>
            <TagsSelector
              value={cardData.tags}
              onChange={onTagsChange}
              deck={deck}
              renderAnchor={({ openMenu, disabled }) => (
                <Button onPress={openMenu} disabled={disabled} icon={'tag'}>
                  Manage card tags (folders)
                </Button>
              )}
            />
            {(cardData.tags.length > 0 || savingTags) && (
              <View
                style={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 8,
                  minHeight: 36,
                }}
              >
                {cardData.tags.map((tag) => (
                  <Chip
                    key={tag.id}
                    selectedColor={theme.colors.outlineVariant}
                    mode="outlined"
                    onClose={() =>
                      onTagsChange(cardData.tags.filter((t) => t.id !== tag.id))
                    }
                  >
                    {tag.data.title}
                  </Chip>
                ))}
                {savingTags && (
                  <ActivityIndicator color={theme.colors.onBackground} />
                )}
              </View>
            )}
          </View>

          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Source'}
            value={cardData.source}
            onChangeText={onTextChange('source')}
          ></TextInput>
          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Transcription'}
            value={cardData.ipa}
            onChangeText={onTextChange('ipa')}
          ></TextInput>
          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Part of Speech'}
            value={cardData.partOfSpeech}
            onChangeText={onTextChange('partOfSpeech')}
          ></TextInput>
          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Translation'}
            value={cardData.translation}
            onChangeText={onTextChange('translation')}
          ></TextInput>
          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Definition'}
            value={cardData.definition}
            multiline={true}
            onChangeText={onTextChange('definition')}
          ></TextInput>
          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Example'}
            value={cardData.example}
            multiline={true}
            onChangeText={onTextChange('example')}
          ></TextInput>
        </View>
      </ScrollView>
    </>
  );
};
