import {useEffect, useRef} from 'react';
import TrackPlayer, {
  Capability,
  RatingType,
  RepeatMode,
} from 'react-native-track-player';

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer({
    maxCacheSize: 2048 * 10,
  });
  await TrackPlayer.updateOptions({
    ratingType: RatingType.Heart,
    // Media controls capabilities
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
  });
  await TrackPlayer.setVolume(0.5);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export const useSetupPlayer = ({onLoad}) => {
  const isInitialized = useRef(false);

  useEffect(() => {
    setupPlayer()
      .then(() => {
        isInitialized.current = true;
        onLoad();
      })
      .catch(error => {
        isInitialized.current = false;
        console.log('error', error);
      });
  }, []);
};
