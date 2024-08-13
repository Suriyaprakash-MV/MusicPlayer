import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';
import {
  GoToNextButton,
  GoToPreviousButton,
  PlayPauseButton,
} from './PlayerControls';
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import {colors} from '../constants/colors';

const imageUrl =
  'https://img.freepik.com/premium-photo/young-boy-looking-universe-from-earth-ai-generative_955712-1514.jpg';

const FloatingPlayer = () => {
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(100);

  return (
    <View>
      <View style={{zIndex: 1}}>
        <Slider
          style={styles.container}
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          theme={{
            minimumTrackTintColor: colors.minimumTintColor,
            maximumTrackTintColor: colors.maximumTintColor,
          }}
          containerStyle={{height: 6}}
        />
      </View>
      <TouchableOpacity style={styles.container} activeOpacity={0.75}>
        <Image source={{uri: imageUrl}} style={styles.coverImage} />
        <View style={styles.titleArtistContainer}>
          <Text style={styles.songText}>Lose Yourself</Text>
          <Text style={styles.artistText}>E m i n e m</Text>
        </View>
        <View style={styles.playerControlContainer}>
          <GoToPreviousButton />
          <PlayPauseButton />
          <GoToNextButton />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coverImage: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
  },
  titleArtistContainer: {
    flex: 1,
    paddingHorizontal: spacing.sm,
  },
  songText: {
    color: 'white',
    fontSize: fontSizes.lg,
    fontFamily: fontFamilies.medium,
  },
  artistText: {
    color: 'white',
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.light,
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
});
