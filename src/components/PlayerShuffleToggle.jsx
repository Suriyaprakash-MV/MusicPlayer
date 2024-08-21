import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PlayerShuffleToggle = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require('../../assets/images/shuffle.png')}
        style={styles.shuffleIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shuffleIcon: {
    width: 45,
    height: 45,
  },
});
export default PlayerShuffleToggle;
