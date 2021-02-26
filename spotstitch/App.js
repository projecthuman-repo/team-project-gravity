import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import Navigator from "./HomeStack"

export default function App() {
  return (
    <Navigator />
  );
}
