import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SongCard from './SongCard';
import {spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';
import TrackPlayer from 'react-native-track-player';

const SongCardWithCategory = ({item, setCurrentTrack}) => {
  // create a function that play a song in queue
  const handlePlayTrack = async (selectedTrack, songs = item.songs) => {
    // Find the index of the selected track in the songs array
    const trackIndex = songs.findIndex(
      track => track.url === selectedTrack.url,
    );
    if (trackIndex === -1) {
      // If the track is not found in the array, return early
      return;
    }

    // Split the songs array into tracks before and after the selected track
    const beforeTracks = songs.slice(0, trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);

    // Reset the TrackPlayer and add the selected track followed by the rest
    await TrackPlayer.reset();
    await TrackPlayer.add(selectedTrack);
    await TrackPlayer.add(afterTracks); // Add tracks after the selected track
    await TrackPlayer.add(beforeTracks); // Add tracks before the selected track

    // Start playback
    await TrackPlayer.play();

    setCurrentTrack(selectedTrack);
  };
  return (
    <View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{item.title}</Text>
      </View>
      <FlatList
        data={item.songs}
        renderItem={({item}) => (
          <SongCard
            item={item}
            handlePlay={selectedTrack => {
              handlePlayTrack(selectedTrack);
            }}
          />
        )}
        horizontal={true}
        ItemSeparatorComponent={
          <View style={{marginHorizontal: spacing.xsm}} />
        }
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

export default SongCardWithCategory;

const styles = StyleSheet.create({
  headerTextContainer: {
    paddingHorizontal: spacing.md,
  },
  headerText: {
    fontSize: 35,
    color: 'white',
    fontFamily: fontFamilies.bold,
  },
  flatListContentContainer: {
    paddingVertical: spacing.xsm,
    paddingHorizontal: spacing.sm,
  },
});
