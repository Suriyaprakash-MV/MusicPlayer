import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {fontSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';
import SongCard from '../components/SongCard';
import FloatingPlayer from '../components/FloatingPlayer';
import {recommendedSongs} from '../data/songs';

const LikeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/backIcon.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/equalizer.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.headingText}>Liked Songs</Text>
        }
        data={recommendedSongs}
        keyExtractor={item =>
          item.id ? item.id.toString() : Math.random().toString()
        }
        renderItem={({item}) => (
          <SongCard
            item={item}
            containerStyle={{width: '47%'}}
            imageStyle={{height: 180, width: 180}}
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 500,
          paddingHorizontal: spacing.lg,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginVertical: spacing.lg,
        }}
      />
      <FloatingPlayer />
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 16,
    paddingVertical: spacing.md,
    height: 60,
  },
  iconImage: {
    width: 60,
    height: 60,
  },
  likedSongsContainer: {
    padding: 15,
  },
  headingText: {
    fontSize: 35,
    color: 'white',
    fontFamily: fontFamilies.bold,
  },
});
