import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import Header from '../components/Header';
import SongCardWithCategory from '../components/SongCardWithCategory';
import FloatingPlayer from '../components/FloatingPlayer';
import {songsWithCategory} from '../data/songsWithCategory';

const HomeScreen = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={songsWithCategory}
        renderItem={({item}) => (
          <SongCardWithCategory
            item={item}
            setCurrentTrack={setCurrentTrack} // Pass setCurrentTrack function
          />
        )}
        contentContainerStyle={{
          paddingBottom: 400,
        }}
      />
      {currentTrack && <FloatingPlayer track={currentTrack} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default HomeScreen;
