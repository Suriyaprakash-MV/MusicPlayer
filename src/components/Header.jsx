import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.settingsIcon}
            source={require('../../assets/images/settings.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.searchIcon}
            source={require('../../assets/images/search.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  settingsIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  searchIcon: {
    width: 55,
    height: 55,
  },
});
