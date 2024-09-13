import { NavigationProp, Route } from '@react-navigation/native';
import { CardItem } from '@vocably/model';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelectedDeck } from './languageDeck/useSelectedDeck';
import { mainPadding } from './styles';

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
  const { update } = useSelectedDeck();

  const { card } = route.params as EditCardParams;
  const [cardData, setCardData] = useState({ ...card.data });
  const [isUpdating, setIsUpdating] = useState(false);

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
    const updateResult = await update(card.id, cardData);
    if (updateResult.success === false) {
      Alert.alert(
        'Error: Card update failed',
        `Oops! Something went wrong while attempting to update the card. Please try again later.`
      );
    }
    navigation.goBack();
  }, [cardData, update, card]);

  const theme = useTheme();
  return (
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
        <Button
          mode={'contained'}
          loading={isUpdating}
          disabled={isUpdating}
          onPress={onUpdate}
        >
          Save
        </Button>
      </View>
    </ScrollView>
  );
};
