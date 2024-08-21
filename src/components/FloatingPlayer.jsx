import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import React from 'react';
import {fontSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';
import {
  GoToNextButton,
  GoToPreviousButton,
  PlayPauseButton,
} from './PlayerControls';
import {
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

const imageUrl =
  'https://img.freepik.com/premium-photo/young-boy-looking-universe-from-earth-ai-generative_955712-1514.jpg';

const FloatingPlayer = () => {
  const navigation = useNavigation();

  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(100);

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
          renderBubble={() => <View />}
        />
      </View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.75}
        onPress={handleOpenPlayerScreen}>
        <Image source={{uri: imageUrl}} style={styles.coverImage} />
        <View style={styles.titleArtistContainer}>
          <MovingText
            text={'Lose yourself and Magic is building'}
            animationThreshold={15}
            style={styles.songText}
          />
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
