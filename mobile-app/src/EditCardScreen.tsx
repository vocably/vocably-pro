import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, TextInput, Button } from 'react-native-paper';
import { NavigationProp, Route } from '@react-navigation/native';
import { CardItem } from '@vocably/model';
import { mainPadding } from './styles';
import { DeckContext } from './DeckContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: mainPadding,
  },
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
  const { update } = useContext(DeckContext);

  const { card } = route.params as EditCardParams;
  const [cardData, setCardData] = useState({ ...card.data });
  const [isUpdating, setIsUpdating] = useState(false);

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
    await update(card.id, cardData, { silent: false });
    navigation.goBack();
  }, [cardData, update, card]);

  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
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
      <Button
        mode={'contained'}
        loading={isUpdating}
        disabled={isUpdating}
        onPress={onUpdate}
      >
        Save
      </Button>
    </View>
  );
};