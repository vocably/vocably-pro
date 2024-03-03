import { RateInteractionPayload } from '@vocably/model';
import React, { FC, useCallback, useContext, useEffect } from 'react';
import { Linking, StyleProp, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { AskForReviewForm } from './AskForReview/Form';
import { isOkayToAsk } from './AskForReview/isOkayToAsk';
import { mobilePlatform, mobileStoreUrl } from './mobilePlatform';
import { UserMetadataContext } from './UserMetadataContainer';

type AskForReview = FC<{
  style?: StyleProp<ViewStyle>;
  numberOfRepetitions?: number;
}>;

export const AskForReview: AskForReview = ({ style, numberOfRepetitions }) => {
  const askForReviewMaxHeight = useSharedValue(0);
  const askForReviewOpacity = useSharedValue(0);

  const { userMetadata, updateUserMetadata } = useContext(UserMetadataContext);

  const askForReviewAnimatedStyles = useAnimatedStyle(() => {
    return {
      maxHeight: askForReviewMaxHeight.value,
      opacity: askForReviewOpacity.value,
    };
  });

  useEffect(() => {
    if (!numberOfRepetitions) {
      return;
    }

    isOkayToAsk({
      userMetadata,
      numberOfRepetitions,
    }).then((isOkay) => {
      if (isOkay) {
        askForReviewMaxHeight.value = 1000;
        askForReviewOpacity.value = withTiming(1);
      }
    });
  }, [numberOfRepetitions]);

  const onAskForReviewAction = useCallback(
    (choice: RateInteractionPayload) => {
      if (choice === 'later' || choice === 'never') {
        askForReviewOpacity.value = withTiming(0);
        askForReviewMaxHeight.value = withTiming(0);
      }

      if (choice === 'review') {
        Linking.openURL(mobileStoreUrl).then();
      }

      updateUserMetadata({
        rate: {
          [mobilePlatform]: {
            response: choice,
            isoDate: new Date().toISOString(),
          },
        },
      }).then();
    },
    [updateUserMetadata]
  );
  return (
    <Animated.View
      style={[
        askForReviewAnimatedStyles,
        style,
        {
          overflow: 'hidden',
        },
      ]}
    >
      <AskForReviewForm onAction={onAskForReviewAction}></AskForReviewForm>
    </Animated.View>
  );
};
