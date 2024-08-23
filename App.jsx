import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './src/navigations/DrawerNavigator';
import {useSetupPlayer} from './src/hooks/useSetupTrackPlayer';

const App = () => {
  const onLoad = () => {
    console.log('track player setupp..');
  };
  useSetupPlayer({onLoad});

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
