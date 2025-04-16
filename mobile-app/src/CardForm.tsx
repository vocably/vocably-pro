import { Card } from '@vocably/model';
import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Menu, TextInput, useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
  inputItem: {
    textAlign: 'auto',
  },
});

type CardFormCard = Pick<
  Card,
  'source' | 'ipa' | 'partOfSpeech' | 'translation' | 'definition' | 'example'
>;

type Props = {
  card: CardFormCard;
  onChange: (value: CardFormCard) => void;
};

export const CardForm: FC<Props> = ({ card, onChange }) => {
  const onTextChange = (paramName: keyof CardFormCard) => (value: string) => {
    onChange({
      ...card,
      [paramName]: value,
    });
  };
  const theme = useTheme();

  const [partOfSpeechMenuVisible, setPartOfSpeechMenuVisible] = useState(false);

  return (
    <>
      <TextInput
        style={styles.inputItem}
        mode={'outlined'}
        label={'Source'}
        value={card.source}
        onChangeText={onTextChange('source')}
        outlineColor={theme.colors.outlineVariant}
      ></TextInput>
      <TextInput
        style={styles.inputItem}
        mode={'outlined'}
        label={'Translation'}
        value={card.translation}
        onChangeText={onTextChange('translation')}
        outlineColor={theme.colors.outlineVariant}
      ></TextInput>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <TextInput
          style={[styles.inputItem, { flex: 1 }]}
          mode={'outlined'}
          label={'Part of Speech'}
          value={card.partOfSpeech}
          onChangeText={onTextChange('partOfSpeech')}
          outlineColor={theme.colors.outlineVariant}
        ></TextInput>
        <Menu
          visible={partOfSpeechMenuVisible}
          onDismiss={() => setPartOfSpeechMenuVisible(false)}
          anchor={
            <IconButton
              icon={'menu-down'}
              onPress={() => setPartOfSpeechMenuVisible(true)}
            />
          }
        >
          {['noun', 'verb', 'adjective', 'adverb', 'phrase'].map((pos) => (
            <Menu.Item
              key={pos}
              onPress={() => {
                onTextChange('partOfSpeech')(pos);
                setPartOfSpeechMenuVisible(false);
              }}
              title={pos}
            />
          ))}
        </Menu>
      </View>
      <TextInput
        style={styles.inputItem}
        mode={'outlined'}
        label={'Transcription'}
        value={card.ipa}
        onChangeText={onTextChange('ipa')}
        outlineColor={theme.colors.outlineVariant}
      ></TextInput>
      <TextInput
        style={styles.inputItem}
        mode={'outlined'}
        label={'Definition'}
        value={card.definition}
        multiline={true}
        onChangeText={onTextChange('definition')}
        outlineColor={theme.colors.outlineVariant}
      ></TextInput>
      <TextInput
        style={styles.inputItem}
        mode={'outlined'}
        label={'Example'}
        value={card.example}
        multiline={true}
        onChangeText={onTextChange('example')}
        outlineColor={theme.colors.outlineVariant}
      ></TextInput>
    </>
  );
};
