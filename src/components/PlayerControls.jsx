import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {iconSizes} from '../constants/dimensions';
import {useState} from 'react';

export const GoToPreviousButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.75}>
      <Image
        style={styles.GoToPreviousButtonIcon}
        source={require('../../assets/images/previous.png')}
      />
    </TouchableOpacity>
  );
};

export const PlayPauseButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <TouchableOpacity onPress={togglePlayPause} activeOpacity={0.75}>
      <Image
        style={styles.PlayPauseButtonIcon}
        source={
          isPlaying
            ? require('../../assets/images/pause-button.png')
            : require('../../assets/images/play.png')
        }
      />
    </TouchableOpacity>
  );
};

export const GoToNextButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.75}>
      <Image
        style={styles.GoToNextButtonIcon}
        source={require('../../assets/images/next-button.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  GoToPreviousButtonIcon: {
    width: iconSizes.xl,
    height: iconSizes.xl,
  },
  PlayPauseButtonIcon: {
    width: iconSizes.xl,
    height: iconSizes.xl,
  },
  GoToNextButtonIcon: {
    width: iconSizes.xl,
    height: iconSizes.xl,
  },
});
