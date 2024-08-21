import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants/colors';
import {fontSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';
import PlayerRepeatToggle from '../components/PlayerRepeatToggle';
import PlayerShuffleToggle from '../components/PlayerShuffleToggle';
import PlayerProgressBar from '../components/PlayerProgressBar';
import {
  GoToNextButton,
  GoToPreviousButton,
  PlayPauseButton,
} from '../components/PlayerControls';

const imageUrl =
  'https://img.freepik.com/premium-photo/young-boy-looking-universe-from-earth-ai-generative_955712-1514.jpg?w=740';

const PlayerScreen = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMute, setIsMute] = useState(false);

  const toggleIsLikedUnLikedButton = () => {
    setIsLiked(!isLiked);
  };

  const toggleIsMuteUnMuteButton = () => {
    setIsMute(!isMute);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.playingNowText}>Playing Now</Text>
      </View>
      <View style={styles.coverImageContainer}>
        <Image source={{uri: imageUrl}} style={styles.coverImage} />
      </View>
      <View style={styles.titleArtistRowHeartContainer}>
        <View style={styles.titleArtistContainer}>
          <Text style={styles.songTitleText}> Lose Yourself</Text>
          <Text style={styles.artistText}>E M I N E M</Text>
        </View>
        <TouchableOpacity onPress={toggleIsLikedUnLikedButton}>
          <Image
            style={styles.heartIcon}
            source={
              isLiked
                ? require('../../assets/images/guitar.png')
                : require('../../assets/images/heart.png')
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.playerControlContainer}>
        <TouchableOpacity
          onPress={toggleIsMuteUnMuteButton}
          style={styles.volumeWrapper}>
          <Image
            style={styles.volumeIcon}
            source={
              isMute
                ? require('../../assets/images/volume-low.png')
                : require('../../assets/images/silent.png')
            }
          />
        </TouchableOpacity>
        <View style={styles.repeatShuffleWrapper}>
          <PlayerRepeatToggle />
          <PlayerShuffleToggle />
        </View>
      </View>
      <PlayerProgressBar />
      <View style={styles.previousPlayPauseNextControlsContainer}>
        <GoToPreviousButton />
        <PlayPauseButton />
        <GoToNextButton />
      </View>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  backIcon: {
    width: 60,
    height: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 70,
  },
  playingNowText: {
    color: 'white',
    fontSize: fontSizes.xl,
    marginLeft: 20,
    position: 'absolute',
    left: '35%',
  },
  coverImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
    marginHorizontal: 25,
    marginTop: 25,
  },
  coverImage: {
    height: 300,
    width: 300,
    borderRadius: 20,
  },
  titleArtistRowHeartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 25,
  },
  titleArtistContainer: {
    flex: 1,
    marginTop: 20,
  },
  songTitleText: {
    color: 'white',
    fontSize: fontSizes.xl,
    fontFamily: fontFamilies.medium,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  artistText: {
    fontSize: fontSizes.lg,
    color: colors.iconSecondary,
    alignContent: 'center',
    alignSelf: 'center',
  },

  heartIcon: {
    width: 45,
    height: 45,
  },
  volumeIcon: {
    width: 45,
    height: 45,
    margin: 20,
    marginTop: 10,
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  volumeWrapper: {
    flex: 1,
  },
  repeatShuffleWrapper: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  previousPlayPauseNextControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xl,
    marginTop: spacing.xl,
  },
});
