import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PlayerRepeatToggle = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require('../../assets/images/repeat.png')}
        style={styles.repeatIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  repeatIcon: {
    width: 45,
    height: 45,
  },
});

export default PlayerRepeatToggle;
