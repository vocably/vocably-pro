import React, { FC, PropsWithChildren, useEffect } from 'react';
import { LayoutChangeEvent, StyleProp, View, ViewStyle } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = PropsWithChildren<{
  // Expands and fades the content in when true,
  // fades it out and collapses its height when false.
  visible: boolean;
  duration?: number;
  style?: StyleProp<ViewStyle>;
}>;

// Unlike entering/exiting layout animations, the children stay mounted
// for the whole animation, so the container collapses together with the
// content instead of after it has been removed.
export const Collapsible: FC<Props> = ({
  visible,
  duration = 250,
  style,
  children,
}) => {
  const contentHeight = useSharedValue(0);
  const progress = useSharedValue(visible ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(visible ? 1 : 0, { duration });
  }, [visible, duration]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: contentHeight.value * progress.value,
    // The content fades out during the first part of the collapse,
    // so it doesn't get visibly clipped by the shrinking container.
    opacity: interpolate(progress.value, [0, 0.4, 1], [0, 0, 1]),
  }));

  const onContentLayout = (event: LayoutChangeEvent) => {
    contentHeight.value = event.nativeEvent.layout.height;
  };

  return (
    <Animated.View
      style={[style, animatedStyle, { overflow: 'hidden' }]}
      pointerEvents={visible ? 'auto' : 'none'}
      accessibilityElementsHidden={!visible}
      importantForAccessibility={visible ? 'auto' : 'no-hide-descendants'}
    >
      {/*
        Absolute positioning lets the content keep its natural height
        while the container is collapsed, so it can be measured.
      */}
      <View
        onLayout={onContentLayout}
        style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
      >
        {children}
      </View>
    </Animated.View>
  );
};
