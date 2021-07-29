import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View } from 'react-native';
import { styles } from './src/styles/app';

const SayItApp = () => {
  return (
    <View style={styles.container}>
      <Text>Hello SayIt</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default SayItApp;


