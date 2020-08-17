import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardPokemon from './src/components/CardPokemon';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>O pedro tá aqui do lado aquele cara legal</Text>
      <CardPokemon/>
      <StatusBar style="light" />
    </View>
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
