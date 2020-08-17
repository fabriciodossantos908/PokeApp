import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardPokemon, { Pokemon } from './src/components/CardPokemon';
import axios from 'axios'


export default function App() {
  const [ pokemons, setPokemons ] = useState([])

  function getAllPokemons () {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then( (response) => {
      setPokemons(response.data.results);
    })
  };
  

  return (
    <>
    {pokemons.map( (pokemon : Pokemon) => {
      <CardPokemon key={pokemon.id} pokemon={pokemon}/>
    })}
      <StatusBar style="light" />
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
