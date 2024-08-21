import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {colors} from '../constants/colors';
import {fontSizes, spacing} from '../constants/dimensions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fontFamilies} from '../constants/fonts';

const CustomDrawerContent = props => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkSunriseThemeButton = () => {
    setIsDark(!isDark);
  };

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };

  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Image
            source={require('../../assets/images/close.png')}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleDarkSunriseThemeButton}>
          <Image
            style={styles.moonSunIcon}
            source={
              isDark
                ? require('../../assets/images/crescent-moon.png')
                : require('../../assets/images/sunrise.png')
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.drawerItemContainer}>
        <DrawerItem
          label={'Profile'}
          icon={() => (
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.drawerItemsIcon}
            />
          )}
          labelStyle={styles.drawerItemsText}
        />
        <DrawerItem
          label={'Liked'}
          icon={() => (
            <Image
              source={require('../../assets/images/heart.png')}
              style={styles.drawerItemsIcon}
            />
          )}
          labelStyle={styles.drawerItemsText}
          onPress={() => {
            props.navigation.navigate('LIKE_SCREEN');
          }}
        />
        <DrawerItem
          label={'Language'}
          icon={() => (
            <Image
              source={require('../../assets/images/language.png')}
              style={styles.drawerItemsIcon}
            />
          )}
          labelStyle={styles.drawerItemsText}
        />
        <DrawerItem
          label={'Contact Us'}
          icon={() => (
            <Image
              source={require('../../assets/images/contactus.png')}
              style={styles.drawerItemsIcon}
            />
          )}
          labelStyle={styles.drawerItemsText}
        />
        <DrawerItem
          label={"FAQ's"}
          icon={() => (
            <Image
              source={require('../../assets/images/faq.png')}
              style={styles.drawerItemsIcon}
            />
          )}
          labelStyle={styles.drawerItemsText}
        />
        <DrawerItem
          label={'Settings'}
          icon={() => (
            <Image
              source={require('../../assets/images/settings.png')}
              style={styles.drawerItemsIcon}
            />
          )}
          labelStyle={styles.drawerItemsText}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeIcon: {
    width: 40,
    height: 40,
  },
  moonSunIcon: {
    width: 40,
    height: 40,
  },
  DrawerItem: {
    width: '100%',
  },
  drawerItemContainer: {
    marginVertical: spacing.xl,
  },
  drawerItemsIcon: {
    width: 40,
    height: 40,
  },
  drawerItemsText: {
    color: colors.iconSecondary,
    fontSize: fontSizes.xl,
    fontFamily: fontFamilies.medium,
    flex: 1,
  },
});
