import { GoogleLanguage } from '@vocably/model';
import React, { FC, useCallback } from 'react';
import { Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type PlaySound = FC<{
  text: string;
  language: GoogleLanguage;
  size?: number;
}>;

export const PlaySound: PlaySound = ({ text, language, size = 16 }) => {
  const theme = useTheme();

  const playAudio = useCallback(() => {
    console.log('Playing audio!!@');

    const audio = new Sound(
      'https://translate.google.com/translate_tts?ie=UTF-8&q=de kring&tl=nl&client=tw-ob',
      '',
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );

    console.log('Audio created');

    audio.play();
  }, []);

  return (
    <Pressable
      style={({ pressed }) => [{}, { opacity: pressed ? 0.5 : 1 }]}
      onPress={() => playAudio()}
    >
      <Icon
        name="play-circle"
        style={{ color: theme.colors.primary }}
        size={size}
      />
    </Pressable>
  );
};
