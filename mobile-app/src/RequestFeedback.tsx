import { RateInteractionPayload } from '@vocably/model';
import React, { FC, useCallback, useContext, useEffect } from 'react';
import { Linking, StyleProp, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { mobilePlatform, mobileStoreUrl } from './mobilePlatform';
import { RequestFeedbackForm } from './RequestFeedback/Form';
import { isOkayToAsk } from './RequestFeedback/isOkayToAsk';
import { UserMetadataContext } from './UserMetadataContainer';

type RequestFeedback = FC<{
  style?: StyleProp<ViewStyle>;
  numberOfRepetitions?: number;
}>;

export const RequestFeedback: RequestFeedback = ({
  style,
  numberOfRepetitions,
}) => {
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

  const onRequestFeedbackAction = useCallback(
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
      <RequestFeedbackForm
        onAction={onRequestFeedbackAction}
      ></RequestFeedbackForm>
    </Animated.View>
  );
};
