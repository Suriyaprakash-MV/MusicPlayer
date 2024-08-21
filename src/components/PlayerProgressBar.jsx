import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilies} from '../constants/fonts';
import {fontSizes, spacing} from '../constants/dimensions';
import {Slider} from 'react-native-awesome-slider';
import {useSharedValue} from 'react-native-reanimated';
import {colors} from '../constants/colors';

const PlayerProgressBar = () => {
  const progress = useSharedValue(0.25);
  const min = useSharedValue(0);
  const max = useSharedValue(1);

  return (
    <View>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}> 0:50 </Text>
        <Text style={styles.timeText}>{'-'} 0:50 </Text>
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
      />
    </View>
  );
};

export default PlayerProgressBar;

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
