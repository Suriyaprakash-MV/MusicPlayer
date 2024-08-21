import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import LikeScreen from '../screen/LikeScreen';
import PlayerScreen from '../screen/PlayerScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HOME_SCREEN" component={HomeScreen} />
      <Stack.Screen name="LIKE_SCREEN" component={LikeScreen} />
      <Stack.Screen name="PLAYER_SCREEN" component={PlayerScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigations;

const styles = StyleSheet.create({});
