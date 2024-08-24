import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import {colors} from '../constants/colors';
import MovingText from './MovingText';
import {useNavigation} from '@react-navigation/native';
// import {artworkUrl, title, artist} from '../data/songs';

const FloatingPlayer = ({track}) => {
  const navigation = useNavigation();

  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);

  const translateX = useSharedValue(0);

  const handleOpenPlayerScreen = () => {
    navigation.navigate('PLAYER_SCREEN');
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  React.useEffect(() => {
    translateX.value = withRepeat(
      withTiming(-300, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1,
      true,
    );
  }, [translateX]);

  // Ensure `track` has a valid artwork URL or provide a default URL
  const artworkUrl = track?.artwork || 'https://via.placeholder.com/80';
  const title = track?.title || 'Unknown Title';
  const artist = track?.artist || 'Unknown Artist';

  return (
    //1
    <View>
      <Slider
        style={{zIndex: 1, marginTop: 50}}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        theme={{
          minimumTrackTintColor: colors.minimumTintColor,
          maximumTrackTintColor: colors.maximumTintColor,
        }}
        renderBubble={() => <View />}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.container} //3
          activeOpacity={0.75}
          onPress={handleOpenPlayerScreen}>
          <Image source={{uri: artworkUrl}} style={styles.coverImage} />
          <View style={styles.titleArtistContainer}>
            <MovingText
              text={title}
              animationThreshold={15}
              style={styles.songText}
            />
            <Text style={styles.artistText}>{artist}</Text>
          </View>
          <View style={styles.playerControlContainer}>
            <GoToPreviousButton />
            <PlayPauseButton />
            <GoToNextButton />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // slider: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // playerContent: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  coverImage: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
  },
  titleArtistContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: spacing.sm,
    marginLeft: spacing.sm,
    marginRight: spacing.lg,
    overflow: 'hidden',
  },
  animatedTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    whiteSpace: 'nowrap',
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

export default FloatingPlayer;
