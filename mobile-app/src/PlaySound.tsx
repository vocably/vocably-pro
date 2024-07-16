import { GoogleTTSLanguage } from '@vocably/model';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Alert, Pressable, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type PlaySound = FC<{
  text: string;
  language: GoogleTTSLanguage;
  size?: number;
  style?: StyleProp<ViewStyle>;
}>;

export const PlaySound: PlaySound = ({
  text,
  language,
  size = 16,
  style = {},
}) => {
  const theme = useTheme();

  const [isPlaying, setIsPlaying] = useState(false);
  const [loadedAudio, setLoadedAudio] = useState<Sound | null>(null);

  const playSound = useCallback(() => {
    Sound.setCategory('Playback');

    const audio =
      loadedAudio ??
      new Sound(
        `https://translate.google.com/translate_tts?ie=UTF-8&q=${text}&tl=${language}&client=tw-ob`,
        '',
        (error) => {
          if (error === null) {
            setLoadedAudio(audio);
          }
          if (error) {
            setIsPlaying(false);
            Alert.alert(
              'Error: The sound could not be played',
              `Something went wrong during the sound playback. The sound playback is a new feature, and it might have problems. Could you please try to play the sound one more time?`
            );
          }
        }
      );

    setIsPlaying(true);
  }, [text, language, setIsPlaying, setLoadedAudio, loadedAudio]);

  useEffect(() => {
    if (isPlaying && loadedAudio) {
      loadedAudio.play(() => {
        setIsPlaying(false);
      });
    }
  }, [isPlaying, loadedAudio, setIsPlaying]);

  return (
    <Pressable
      disabled={isPlaying}
      hitSlop={20}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.25 : 0.5,
          // Make play sound stand out and hitSlop working
          zIndex: 1,
        },
        style,
      ]}
      onPress={playSound}
    >
      <Icon
        name={isPlaying ? 'volume-medium' : 'play-circle'}
        style={{
          color: theme.colors.onBackground,
        }}
        size={size}
      />
    </Pressable>
  );
};
