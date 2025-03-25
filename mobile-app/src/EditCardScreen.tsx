import { NavigationProp, Route } from '@react-navigation/native';
import { CardItem, TagItem } from '@vocably/model';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Alert, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Button, Chip, TextInput, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelectedDeck } from './languageDeck/useSelectedDeck';
import { Loader } from './loaders/Loader';
import { mainPadding } from './styles';
import { TagsSelector } from './TagsSelector';

const styles = StyleSheet.create({
  inputItem: {
    marginBottom: 16,
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
  const [isDeleting, setIsDeleting] = useState(false);
  const theme = useTheme();

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

  const onDelete = async () => {
    Alert.alert(
      'Delete this card?',
      'This operation can not be undone',
      [
        { text: 'Cancel', onPress: () => {} },
        {
          text: 'Delete',
          onPress: async () => {
            setIsDeleting(true);
            const deleteResult = await deck.remove(card.id);
            if (deleteResult.success === false) {
              setIsDeleting(false);
              Alert.alert('Unable to delete the card. Please try again.');
              return;
            }
            navigation.goBack();
          },
        },
      ],
      { cancelable: true }
    );
  };

  if (isDeleting) {
    return (
      <View style={{ flex: 1 }}>
        <Loader>Deleting card...</Loader>
      </View>
    );
  }

  return (
    <>
      <Appbar.Header statusBarHeight={0}>
        <Appbar.Action
          icon={'close'}
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content title="Edit Card" />
        <Appbar.Action
          icon={'check'}
          size={24}
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
          <View
            style={{
              marginBottom: 24,
              alignItems: Platform.OS === 'android' ? 'flex-start' : 'center',
            }}
          >
            <TagsSelector
              value={cardData.tags}
              onChange={onTagsChange}
              deck={deck}
              renderAnchor={({ openMenu, disabled }) => (
                <Button
                  onPress={openMenu}
                  disabled={disabled}
                  icon={'tag'}
                  loading={savingTags}
                >
                  Manage card tags (folders)
                </Button>
              )}
            />
            {cardData.tags.length > 0 && (
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
              </View>
            )}
          </View>

          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Source'}
            value={cardData.source}
            onChangeText={onTextChange('source')}
            outlineColor={theme.colors.outlineVariant}
          ></TextInput>
          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Transcription'}
            value={cardData.ipa}
            onChangeText={onTextChange('ipa')}
            outlineColor={theme.colors.outlineVariant}
          ></TextInput>
          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Part of Speech'}
            value={cardData.partOfSpeech}
            onChangeText={onTextChange('partOfSpeech')}
            outlineColor={theme.colors.outlineVariant}
          ></TextInput>
          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Translation'}
            value={cardData.translation}
            onChangeText={onTextChange('translation')}
            outlineColor={theme.colors.outlineVariant}
          ></TextInput>
          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Definition'}
            value={cardData.definition}
            multiline={true}
            onChangeText={onTextChange('definition')}
            outlineColor={theme.colors.outlineVariant}
          ></TextInput>
          <TextInput
            style={styles.inputItem}
            mode={'outlined'}
            label={'Example'}
            value={cardData.example}
            multiline={true}
            onChangeText={onTextChange('example')}
            outlineColor={theme.colors.outlineVariant}
          ></TextInput>
          <Button
            icon={'delete'}
            textColor={theme.colors.error}
            onPress={onDelete}
          >
            Delete this card
          </Button>
        </View>
      </ScrollView>
    </>
  );
};
