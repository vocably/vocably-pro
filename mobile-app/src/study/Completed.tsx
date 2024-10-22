import { sample } from 'lodash-es';
import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RequestFeedback } from '../RequestFeedback.tsx';
import { Displayer } from './Displayer';

const motivationalQuotes = [
  'Great job today!',
  'Well done indeed!',
  'You nailed it!',
  'Awesome work there!',
  'Excellent effort, congrats!',
  'You crushed it!',
  'Superb work, congratulations!',
  'You did amazing!',
  'Hats off to you!',
  'Keep it up!',
  'Stellar performance, congrats!',
  'Bravo, well done!',
  'Truly outstanding work!',
  'Fantastic achievement, congrats!',
  'You’ve outdone yourself!',
  'Impressive work today!',
  'High five, congrats!',
  'You’re a star!',
  'Mission accomplished, well done!',
  'Remarkable job, congrats!',
  'You’ve earned it!',
  'Kudos to you!',
  'You shined today!',
  'You did great!',
  'Marvelous job done!',
  'Tremendous effort, well done!',
  'You made it happen!',
  'Cheers to you!',
  'Pat yourself, congrats!',
];

type Completed = FC<{
  numberOfRepetitions?: number;
  onStudyAgain?: () => void;
}>;

export const Completed: Completed = ({
  onStudyAgain = () => {},
  numberOfRepetitions,
}) => {
  const theme = useTheme();
  const [motivationalQuote, setMotivationalQuote] = useState('');

  useEffect(() => {
    if (Math.random() < 0.6) {
      return;
    }

    setMotivationalQuote(sample(motivationalQuotes) as string);
  }, []);

  return (
    <Displayer style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
        }}
      >
        <Icon
          name="check-circle"
          size={128}
          color={theme.colors.primary}
        ></Icon>
        {motivationalQuote.length > 0 && (
          <Text style={{ color: theme.colors.onBackground, fontSize: 16 }}>
            {motivationalQuote}
          </Text>
        )}
        <Button onPress={onStudyAgain}>Take one more round</Button>
        <RequestFeedback
          numberOfRepetitions={numberOfRepetitions}
          style={{
            paddingHorizontal: 24,
          }}
        />
      </View>
    </Displayer>
  );
};
