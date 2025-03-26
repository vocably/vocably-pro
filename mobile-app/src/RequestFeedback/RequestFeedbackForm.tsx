import { useNavigation } from '@react-navigation/native';
import { RateInteractionPayload } from '@vocably/model';
import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { mobileStoreName } from '../mobilePlatform';

export type Props = {
  style?: StyleProp<ViewStyle>;
  onAction?: (choice: RateInteractionPayload) => void;
};

export const RequestFeedbackForm: FC<Props> = ({
  style,
  onAction = () => {},
}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <View
      style={[
        {
          flex: 0,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
        },
        style,
      ]}
    >
      <View>
        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
          It's okay to skip the following text.{'\n'}I understand that people
          can be busy{'\n'}or not in the mood.
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: 'center' }}>
          Do you love Vocably? Your rating on {mobileStoreName} will take less
          than a minute and help this project.
        </Text>
      </View>
      <View style={{ alignSelf: 'stretch' }}>
        <Button mode={'outlined'} onPress={() => onAction('review')}>
          Yes, I'll rate Vocably on {mobileStoreName}
        </Button>
      </View>
      <View style={{ alignSelf: 'stretch' }}>
        <Button mode={'text'} onPress={() => onAction('later')}>
          No, ask me later
        </Button>
      </View>
      <View>
        <Text style={{ textAlign: 'center' }}>
          If you are missing or don't like something, you can always{' '}
          <Text
            style={{ color: theme.colors.primary }}
            onPress={() => navigation.navigate('Feedback')}
          >
            let me know
          </Text>
          . I take every feedback seriously.
        </Text>
      </View>
      <View>
        <Button
          mode="text"
          textColor={theme.colors.onSurface}
          onPress={() => onAction('never')}
        >
          I don't want to see this message again
        </Button>
      </View>
    </View>
  );
};
