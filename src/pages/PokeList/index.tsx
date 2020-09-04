import React, { useState, useEffect } from 'react'
import { View, Button } from 'react-native'
import CardPokemon, { Pokemon } from '../../components/CardPokemon';
import api from '../../services/api';

const PokemonsObj = [
    {
        id: 0,
        name: 'Pikachu',
        height: 20,
        sprites: {
            back_default: 'http://teste',
        }
    },
    {
        id: 0,
        name: 'Pikachu',
        height: 20,
        sprites: {
            back_default: 'http://teste',
        }
    },
    {
        id: 0,
        name: 'Pikachu',
        height: 20,
        sprites: {
            back_default: 'http://teste',
        }
    },
    {
        id: 0,
        name: 'Pikachu',
        height: 20,
        sprites: {
            back_default: 'http://teste',
        }
    },
]

function PokeList() {
    const [pokemons, setPokemons] = useState([PokemonsObj])

    // function getAllPokemons() {
    //     return api.get('pokemon/')
    //         .then((response) => {
    //             response.data.results;
    //         })
    // };

    // useEffect(() => {
    //     getAllPokemons().then((pokemons) => {
    //         setPokemons(pokemons)
    //         alert(pokemons)
    //     }
    //     )
    // }, [])

    return (
        <View>
            {/* <Button title='pokemons' onPress={getAllPokemons} >pokemons</Button> */}
            {pokemons.map((pokemon: Pokemon) => {
                <CardPokemon key={pokemon.id} pokemon={pokemon} />
            })}
        </View >
    )
};


export default PokeList;