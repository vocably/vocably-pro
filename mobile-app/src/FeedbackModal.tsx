import { NavigationProp } from '@react-navigation/native';
import { sendUserFeedback } from '@vocably/api';
import { FC, useCallback, useState } from 'react';
import { Alert, Platform, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useUserEmail } from './auth/getEmail';
import { VocablyTextInput } from './VocablyTextInput';

type Props = {
  navigation: NavigationProp<any>;
};

export const FeedbackModal: FC<Props> = ({ navigation }) => {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const userEmail = useUserEmail();

  const sendFeedback = useCallback(async () => {
    setIsSending(true);
    const res = await sendUserFeedback({
      feedback: text,
      metadata: {
        platform: 'mobile',
        os: Platform.OS,
      },
    });

    if (res.success === true) {
      Alert.alert('Thank you for your feedback!');
      setText('');
    } else {
      Alert.alert('Something went wrong. Please try again later.');
    }

    setIsSending(false);
  }, [sendUserFeedback, text, setIsSending, Alert, navigation.goBack]);

  const insets = useSafeAreaInsets();

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          paddingVertical: 32,
          paddingLeft: insets.left + 32,
          paddingRight: insets.right + 32,
        }}
      >
        <Text style={{ marginBottom: 16 }}>
          Are you missing any crucial features? Do you have questions, or would
          you like to share your opinion about Vocably? I would love to hear
          from you!
        </Text>
        <Text style={{ marginBottom: 16 }}>
          I respond to every user. Usually, it takes me a couple of days to
          reply.
        </Text>
        {userEmail && (
          <Text style={{ marginBottom: 16 }}>
            I will respond to you at your email address{' '}
            <Text style={{ fontWeight: 'bold' }}>{userEmail}</Text>.
            {userEmail.includes('privaterelay') && (
              <Text>
                {' '}
                This seems like a secret Apple email you shared with me during
                the registration, but no worries; it should work just fine.
              </Text>
            )}
          </Text>
        )}
        <VocablyTextInput
          style={{ marginBottom: 16 }}
          multiline
          placeholder={'Please type your message here...'}
          inputStyle={{ height: 128 }}
          onChangeText={setText}
          value={text}
        />
        <View style={{ marginBottom: 16 }}>
          <Button
            mode={'contained'}
            disabled={text.trim() === '' || isSending}
            onPress={sendFeedback}
            loading={isSending}
          >
            Send
          </Button>
        </View>
        <View>
          <Button mode={'outlined'} onPress={() => navigation.goBack()}>
            Close
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
