import { Card } from '@vocably/model';
import { FC, useState } from 'react';
import { View } from 'react-native';
import { IconButton, Menu, useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { FormText } from './ui/FormText';

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
  const { t } = useTranslation();

  const [partOfSpeechMenuVisible, setPartOfSpeechMenuVisible] = useState(false);

  const partsOfSpeech = [
    'noun',
    'verb',
    'adjective',
    'adverb',
    'phrase',
  ] as const;

  return (
    <View style={{ gap: 16 }}>
      <FormText
        testID="card-form-source"
        label={t('cardForm.wordOrPhrase')}
        value={card.source}
        onChangeText={onTextChange('source')}
      />
      <FormText
        testID="card-form-translation"
        label={t('cardForm.translation')}
        value={card.translation}
        onChangeText={onTextChange('translation')}
      />
      <FormText
        testID="card-form-part-of-speech"
        label={t('cardForm.partOfSpeech')}
        value={card.partOfSpeech}
        onChangeText={onTextChange('partOfSpeech')}
        right={
          <Menu
            visible={partOfSpeechMenuVisible}
            onDismiss={() => setPartOfSpeechMenuVisible(false)}
            contentStyle={{
              borderRadius: 8,
            }}
            anchor={
              <IconButton
                testID="card-form-part-of-speech-menu"
                icon={'menu-down'}
                onPress={() => setPartOfSpeechMenuVisible(true)}
                style={{
                  backgroundColor: 'transparent',
                  padding: 0,
                }}
              />
            }
          >
            {partsOfSpeech.map((pos) => (
              <Menu.Item
                testID={`card-form-part-of-speech-${pos}`}
                key={pos}
                onPress={() => {
                  onTextChange('partOfSpeech')(pos);
                  setPartOfSpeechMenuVisible(false);
                }}
                title={t(`cardForm.partsOfSpeech.${pos}`)}
              />
            ))}
          </Menu>
        }
      />
      <FormText
        testID="card-form-ipa"
        label={t('cardForm.transcriptionIpa')}
        value={card.ipa}
        onChangeText={onTextChange('ipa')}
      />
      <FormText
        testID="card-form-definition"
        label={t('cardForm.definition')}
        value={card.definition}
        multiline={true}
        onChangeText={onTextChange('definition')}
      />
      <FormText
        testID="card-form-example"
        label={t('cardForm.example')}
        value={card.example}
        multiline={true}
        onChangeText={onTextChange('example')}
      />
    </View>
  );
};
