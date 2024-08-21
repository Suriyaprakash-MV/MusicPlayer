import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {fontSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';
import {
  GoToNextButton,
  GoToPreviousButton,
  PlayPauseButton,
} from './PlayerControls';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import {colors} from '../constants/colors';

const imageUrl =
  'https://img.freepik.com/premium-photo/young-boy-looking-universe-from-earth-ai-generative_955712-1514.jpg';

const MovingText = ({text, animationThreshold, style}) => {
  const translateX = useSharedValue(0);
  const shouldAnimate = text.length >= animationThreshold;
  const textWidth = text.length * 3;

  useEffect(() => {
    if (!shouldAnimate) return;

    translateX.value = withDelay(
      2000,
      withRepeat(
        withTiming(-textWidth, {
          duration: 5000,
          easing: Easing.linear,
        }),
        -1, // Infinite repeat
        true, // Reverse direction after each cycle
      ),
    );
  }, [translateX, text, animationThreshold, textWidth]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <Animated.Text
      numberOfLines={1}
      style={[
        animatedStyle,
        style,
        shouldAnimate && {
          width: 9999,
          paddingLeft: 16,
        },
      ]}>
      {text}
    </Animated.Text>
  );
};

export default MovingText;
