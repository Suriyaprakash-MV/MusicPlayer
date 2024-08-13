import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontFamilies} from '../constants/fonts';
import {fontSizes, spacing} from '../constants/dimensions';

const imageUrl =
  'https://linkstorage.linkfire.com/medialinks/images/2d5d5364-16cd-475c-995f-0cf8c081032b/artwork-440x440.jpg';

const SongCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.contentHolder}>
        <Image source={{uri: imageUrl}} style={styles.coverImage} />
        <Text style={styles.title}>Rally up</Text>
        <Text style={styles.artist}> G r i o t e n </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 270,
    justifyContent: 'flex-start',
  },
  contentHolder: {
    alignItems: 'center',
  },
  coverImage: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },
  title: {
    color: 'white',
    fontFamily: fontFamilies.bold,
    textAlign: 'left',
    fontSize: fontSizes.lg,
    padding: spacing.xsm,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  artist: {
    color: 'white',
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.md,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});

export default SongCard;
