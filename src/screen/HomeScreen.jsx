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
import {fontFamilies} from '../constants/fonts';

import Header from '../components/Header';
import SongCard from '../components/SongCard';
import {spacing} from '../constants/dimensions';
import SongCardWithCategory from '../components/SongCardWithCategory';
import FloatingPlayer from '../components/FloatingPlayer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={SongCardWithCategory}
        contentContainerStyle={{
          paddingBottom: 400,
        }}
      />
      <FloatingPlayer />
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
