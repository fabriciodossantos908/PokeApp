import { StatusBar } from 'expo-status-bar';
import React from 'react';

import PokeList from './src/pages/PokeList';
import { StyleSheet } from 'react-native';
import AppStack from './src/routes/appStack';

export default function App() {

  return (
    <>
      <AppStack />
      <StatusBar style="dark" />
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
