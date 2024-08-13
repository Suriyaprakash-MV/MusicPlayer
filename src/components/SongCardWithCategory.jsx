import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SongCard from './SongCard';
import {spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';

const SongCardWithCategory = () => {
  return (
    <View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Recomended for you</Text>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={SongCard}
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
