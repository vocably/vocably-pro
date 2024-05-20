import { NavigationProp } from '@react-navigation/native';
import { sendUserFeedback } from '@vocably/api';
import { FC, useCallback, useState } from 'react';
import { Alert, Platform, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { VocablyTextInput } from './VocablyTextInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 32,
  },
});

type FeedbackModal = FC<{
  navigation: NavigationProp<any>;
}>;

export const FeedbackModal: FeedbackModal = ({ navigation }) => {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);

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
      navigation.goBack();
    } else {
      Alert.alert('Something went wrong. Please try again later.');
    }

    setIsSending(false);
  }, [sendUserFeedback, text, setIsSending, Alert, navigation.goBack]);

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 16 }}>
        Please type in your feedback below. Your feedback will be sent to me.
      </Text>
      <VocablyTextInput
        style={{ marginBottom: 16 }}
        multiline
        placeholder={'Type your feedback here.'}
        inputStyle={{ height: 128 }}
        onChangeText={setText}
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
          Cancel
        </Button>
      </View>
    </View>
  );
};
