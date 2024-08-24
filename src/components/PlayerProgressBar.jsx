import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Slider} from 'react-native-awesome-slider';
import {
  useSharedValue,
  useAnimatedProps,
  withSpring,
} from 'react-native-reanimated';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fonts';
import {fontSizes, spacing} from '../constants/dimensions';

const PlayerProgressBar = () => {
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const progress = useSharedValue(0);

  useTrackPlayerEvents([Event.PlaybackProgress], async event => {
    if (event.type === Event.PlaybackProgress) {
      const currentPosition = await TrackPlayer.getPosition();
      const trackDuration = await TrackPlayer.getDuration();
      setPosition(currentPosition);
      setDuration(trackDuration);
      progress.value = currentPosition / trackDuration;
    }
  });

  useEffect(() => {
    progress.value = position / duration;
  }, [position, duration]);

  const animatedProps = useAnimatedProps(() => ({
    value: progress.value,
  }));

  return (
    <View>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>{formatTime(position)}</Text>
        <Text style={styles.timeText}>-{formatTime(duration - position)}</Text>
      </View>
      <Slider
        style={styles.slidingContainer}
        containerStyle={{
          height: 7,
          borderRadius: spacing.sm,
        }}
        theme={{
          maximumTrackTintColor: colors.maximumTintColor,
          minimumTrackTintColor: colors.minimumTintColor,
        }}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        thumbWidth={18}
        renderBubble={() => null}
        animatedProps={animatedProps}
      />
    </View>
  );
};

const formatTime = seconds => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  timeText: {
    color: 'white',
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.md,
    opacity: 0.75,
    margin: 10,
  },
  slidingContainer: {
    marginVertical: spacing.xl,
    margin: 10,
  },
});

export default PlayerProgressBar;
