import React from 'react'
import { View, Text, Image } from 'react-native'

export interface Pokemon {
    id: number;
    name: string;
    height: number;
    sprites: {
        back_default: string,
    };
}

interface PokemonsItemProps {
    pokemon: Pokemon
}

const CardPokemon: React.FC<PokemonsItemProps> = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <View>
            <Text>
                Teste
            </Text>

            <Text>
                altura {pokemon.name}
            </Text>

            {/* <Image source={sprites.back_default} /> */}
        </View>
    )
}

export default CardPokemon;